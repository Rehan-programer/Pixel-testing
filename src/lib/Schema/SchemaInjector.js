import { schemaMap } from "./SchemaMap";

export default function SchemaInjector({ page, data, lang }) {

  let schema = schemaMap[page];

  // ✅ agar function hai to call karo
  if (typeof schema === "function") {
    schema = schema(data, lang);
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}