/**
 * WORKROOM pilot submission collector
 * 1) Create a Google Sheet, copy its ID from the URL.
 * 2) In Extensions > Apps Script, paste this file.
 * 3) Set SHEET_ID below.
 * 4) Deploy > New deployment > Web app; Execute as Me; access Anyone.
 * 5) Copy the Web App URL into index.html's ENDPOINT constant.
 */
const SHEET_ID = "PASTE_GOOGLE_SHEET_ID_HERE";
const TAB_NAME = "Submissions";
const HEADERS = ["submittedAt","name","email","college","course","challenge","mode","team","link","evidence","reflection","consent"];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(TAB_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(TAB_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    const row = HEADERS.map(key => payload[key] === undefined ? "" : String(payload[key]));
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
function doGet() {
  return ContentService.createTextOutput("WORKROOM submission endpoint is live.")
    .setMimeType(ContentService.MimeType.TEXT);
}