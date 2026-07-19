// ===================================================
// Google Apps Script — Broclean Leads
// הדבק קוד זה ב: Extensions > Apps Script
// לאחר מכן: Deploy > New deployment > Web App
// Execute as: Me | Who has access: Anyone
// ===================================================

const SHEET_NAME = "לידים";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let sheet   = ss.getSheetByName(SHEET_NAME);

    // צור גיליון אם לא קיים + כותרות
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["תאריך", "שם", "טלפון", "שירות", "הודעה"]);
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#f59e0b").setFontColor("#000000");
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 160);
      sheet.setColumnWidth(2, 140);
      sheet.setColumnWidth(3, 130);
      sheet.setColumnWidth(4, 140);
      sheet.setColumnWidth(5, 300);
    }

    sheet.appendRow([
      data.date    || new Date().toLocaleString("he-IL"),
      data.name    || "",
      data.phone   || "",
      data.service || "",
      data.message || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// בדיקה ידנית — הרץ פונקציה זו כדי לוודא שהכל עובד
function testInsert() {
  doPost({
    postData: {
      contents: JSON.stringify({
        date: "01/01/2025, 12:00:00",
        name: "ישראל ישראלי",
        phone: "050-000-0000",
        service: "ניקיון משרדים",
        message: "בדיקה",
      }),
    },
  });
}
