import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "שם וטלפון הם שדות חובה" }, { status: 400 });
    }

    if (!APPS_SCRIPT_URL) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not set");
      return NextResponse.json({ error: "שגיאת שרת" }, { status: 500 });
    }

    const payload = {
      name,
      phone,
      service: service || "לא צוין",
      message: message || "",
      date: new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" }),
    };

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Apps Script responded with ${res.status}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "שגיאה בשמירת הפרטים" }, { status: 500 });
  }
}
