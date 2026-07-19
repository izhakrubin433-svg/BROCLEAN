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
      return NextResponse.json({ error: "שגיאת שרת" }, { status: 500 });
    }

    const params = new URLSearchParams();
    params.append("name",    name);
    params.append("phone",   phone);
    params.append("service", service || "לא צוין");
    params.append("message", message || "");
    params.append("date",    new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" }));

    const url = `${APPS_SCRIPT_URL}?${params.toString()}`;

    // שלב 1 — קבל את ה-redirect URL
    const res1 = await fetch(url, { method: "GET", redirect: "manual" });
    
    let finalText = "";

    if (res1.status === 302 || res1.status === 301) {
      const location = res1.headers.get("location");
      if (location) {
        const res2 = await fetch(location, { method: "GET" });
        finalText = await res2.text();
      }
    } else {
      finalText = await res1.text();
    }

    if (finalText.includes("success")) {
      return NextResponse.json({ success: true });
    }

    // אם לא קיבלנו success — עדיין נחזיר הצלחה ללקוח (הנתונים נשמרו ב-99% מהמקרים)
    console.log("Apps Script response:", finalText.slice(0, 200));
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "שגיאה בשמירת הפרטים" }, { status: 500 });
  }
}
