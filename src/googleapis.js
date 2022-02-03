/**
 * Use the googleapis library to access SDDB
 */

const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({

  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",

});
const client = auth.getClient();


// Instance of Google Sheets API
const googleSheets = google.sheets({ version: "v4", auth: client });

const spreadsheetId = "1VsLyMaN6-3zMkmshaE9VhAFQLCyvx4Y_KjE0Lb6tVd8";

// main get function
async function getRows(ranges) {
  const rows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: ranges,
  });

  return rows;
}

// eg. get players
const players = await getRows("players!A13:J")