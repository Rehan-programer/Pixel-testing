

export default function stripHtml(html) {
  if (!html || typeof html !== "string") return "";

  if (typeof window !== "undefined") {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.innerText
      .replace(/&nbsp;/g, " ") 
      .replace(/<\/p>/g, "\n") 
      .replace(/<[^>]*>?/gm, "") 
      .split("\n") 
      .map(line => line.trim())
      .filter(line => line) 
      .join("\n"); 
  }

  return html
    .replace(/&nbsp;/g, " ") 
    .replace(/<\/p>/g, "\n") 
    .replace(/<[^>]*>?/gm, "") 
    .split("\n")
    .map(line => line.trim())
    .filter(line => line)
    .join("\n");
}

export const cleanHTML = (html) => {
  if (typeof html !== "string") return "";

  let cleaned = html
    .replace(
      /<p[^>]*>\s*[•●]\s*(?:&nbsp;|\t|\s)*([\s\S]*?)<\/p>/gi,
      "<li>$1</li>"
    )
    .replace(/<p[^>]*>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    .replace(/<p[^>]*>[\u200B-\u200D\uFEFF]*<\/p>/gi, "")
    .replace(/<h[1-6][^>]*>(\s|&nbsp;|<br\s*\/?>)*<\/h[1-6]>/gi, "")
    .replace(/(<br\s*\/?>\s*){2,}/gi, "<br>")
    .replace(/(<br\s*\/?>\s*)(?=<h[1-6])/gi, "")
    .replace(/(<\/h[1-6]>\s*)(<br\s*\/?>)+/gi, "$1")
    .replace(/^\s*[\r\n]/gm, "")
    .replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, "");

  if (cleaned.includes("<li>")) {
    cleaned = `<ul>${cleaned}</ul>`.replace(
      /<\/li>\s*<li>/g,
      "</li><li>"
    );
  }

  return cleaned.trim();
};



export const sanitizeImageURL = (url) => {
  if (!url) return "";

  const parts = url.split("/");
  const fileName = parts.pop(); 
  const encodedFileName = encodeURIComponent(fileName);

  return [...parts, encodedFileName].join("/");
};
