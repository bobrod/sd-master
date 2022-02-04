# GoogleSheets Connection Options

SDDB Raw Shared Link (Created via Share button):\
https://docs.google.com/spreadsheets/d/1bAkdviCem86Zx2WafziYzwj71hojWnfWiMTg5KYY3Cw/edit#gid=94746449

SDDB Raw Published Link (created via file->share->Publish to web):\
https://docs.google.com/spreadsheets/d/e/2PACX-1vS_wBhF_on8l1V1GUeBrW5zWaWPA0GHYg4wZPW-IWFccqDmg0AkLVTuRW99TqxqhLz77mU1bsS9yt40/pub?single=true&gid=94746449

## CSV Format

Use the [SDDB Raw Published Link](https://docs.google.com/spreadsheets/d/e/2PACX-1vS_wBhF_on8l1V1GUeBrW5zWaWPA0GHYg4wZPW-IWFccqDmg0AkLVTuRW99TqxqhLz77mU1bsS9yt40/pub?)

add:

`gid={gid}&single=true&output=csv`

eg:

`https://docs.google.com/spreadsheets/d/e/2PACX-1vS_wBhF_on8l1V1GUeBrW5zWaWPA0GHYg4wZPW-IWFccqDmg0AkLVTuRW99TqxqhLz77mU1bsS9yt40/pub?gid=94746449&single=true&output=csv`

Example usage (taken from sd-axios):

```jsx
function getURL(gid: any) {
  const dbUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_wBhF_on8l1V1GUeBrW5zWaWPA0GHYg4wZPW-IWFccqDmg0AkLVTuRW99TqxqhLz77mU1bsS9yt40/pub";
  return `${dbUrl}?gid=${gid}&output=csv`;
}

async function fetchParsedCSV(url: string): Promise<any> {
  try {
    const response = await axios.get(url);
    const parsed = Papa.parse(response.data, {
      header: true,
    });

    return parsed.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPlayers(): Promise<Player[]> {
  return await fetchParsedCSV(getURL(SheetId.Players));
}
```

## Google Visualization API Format

Use the [SDDB Raw Shared Link](`https://docs.google.com/spreadsheets/d/1bAkdviCem86Zx2WafziYzwj71hojWnfWiMTg5KYY3Cw/`)

add:

`gviz/tq?sheet={sheet}&headers=1&tq=select%20*`

eg:

`https://docs.google.com/spreadsheets/d/1bAkdviCem86Zx2WafziYzwj71hojWnfWiMTg5KYY3Cw/gviz/tq?sheet=players&headers=1&tq=select%20*`

## Web App

Use the spreadsheet URL (just open spreadsheet in browser and copy value in url bar)

Example usage (Google AppsScript):

```jsx
function loadSpreadsheet(url) {
  const ss = SpreadsheetApp.openByUrl(url);
  return ss;
}

function loadWorksheet(url, sheetName) {
  const ss = loadSpreadsheet(url);
  const ws = ss.getSheetByName(sheetName);
}
```

## GOOGLEAPIS

see googleapis.js
