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
      console.error("GOOGLE_APPS_SCRIPT_URL not set");
      return NextResponse.json({ error: "שגיאת שרת" }, { status: 500 });
    }

    const dateStr = new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" });

    // ── 1. שמירה ב-Google Sheets ──
    const params = new URLSearchParams();
    params.append("name",    name);
    params.append("phone",   phone);
    params.append("service", service || "לא צוין");
    params.append("message", message || "");
    params.append("date",    dateStr);

    const url = `${APPS_SCRIPT_URL}?${params.toString()}`;

    try {
      const res1 = await fetch(url, { method: "GET", redirect: "manual" });
      if (res1.status === 302 || res1.status === 301) {
        const location = res1.headers.get("location");
        if (location) await fetch(location, { method: "GET" });
      }
    } catch (sheetErr) {
      console.error("Google Sheets error:", sheetErr);
      // ממשיכים — לא נכשל בגלל Sheets
    }

    // ── 2. שליחת הודעת WhatsApp לעצמך (notification) ──
    // הלינק הזה נשמר ב-log — אפשר לחבר ל-Twilio/WhatsApp Business בעתיד
    const waMessage = encodeURIComponent(
      `🔔 ליד חדש!\n👤 שם: ${name}\n📞 טלפון: ${phone}\n🧹 שירות: ${service || "לא צוין"}\n💬 הודעה: ${message || "—"}\n📅 תאריך: ${dateStr}`
    );
    console.log(`New lead — WhatsApp notify: https://wa.me/972502328041?text=${waMessage}`);

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "שגיאה בשמירת הפרטים" }, { status: 500 });
  }
}
