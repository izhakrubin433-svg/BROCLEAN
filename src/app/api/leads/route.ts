import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "שם וטלפון הם שדות חובה" }, { status: 400 });
    }

    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!APPS_SCRIPT_URL) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not set");
      return NextResponse.json({ error: "שגיאת שרת" }, { status: 500 });
    }

    const params = new URLSearchParams();
    params.append("name",    name);
    params.append("phone",   phone);
    params.append("service", service || "לא צוין");
    params.append("message", message || "");
    params.append("date",    new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" }));

    const res = await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
    });

    const text = await res.text();
    if (!text.includes("success")) throw new Error(text);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "שגיאה בשמירת הפרטים" }, { status: 500 });
  }
}
