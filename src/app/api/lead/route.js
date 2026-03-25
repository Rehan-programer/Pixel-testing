import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Using service account:", process.env.GOOGLE_CLIENT_EMAIL);
    console.log("Sheet ID:", process.env.GOOGLE_SHEET_ID);

    const {
      firstName,
      lastName,
      serviceType,
      serviceTypeSecond,
      emailAddress,
      phoneNumber,
      propertyType,
      numberOfSpaces,
      numberOfImages,
      styleType,
    } = body;

    if (!firstName || !emailAddress) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const values = [
      [
        firstName || "",
        lastName || "",
        serviceType || "",
        serviceTypeSecond || "",
        emailAddress || "",
        phoneNumber || "",
        propertyType || "",
        Number(numberOfSpaces ?? 0),
        Number(numberOfImages ?? 0),
        styleType || "",
      ],
    ];

    // ✅ get sheet tab name from env (default to Sheet1)
    const tab = process.env.GOOGLE_SHEET_TAB || "Sheet1";

    // ✅ if tab contains spaces, wrap in quotes
    const range = tab.includes(" ") ? `'${tab}'!A:J` : `${tab}!A:J`;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Sheet append error:", err);

    // ✅ Optional: If range error happens, list all tab names to debug
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      const sheets = google.sheets({ version: "v4", auth });

      const meta = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
      });

      const tabs = meta.data.sheets?.map((s) => s.properties?.title).filter(Boolean);
      console.log("Available sheet tabs:", tabs);
    } catch (e) {
      console.log("Failed to fetch sheet tabs for debug:", e?.message || e);
    }

    return new Response(JSON.stringify({ error: "Failed to submit" }), {
      status: 500,
    });
  }
}