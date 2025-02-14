HtmlService.createHtmlOutput(htmlContent).addMetaTag('viewport', 'width=device-width, initial-scale=1');



function read() {
    let spreadsheetId = 'idFile';
    
    let artmasters = {
      ids: Sheets.Spreadsheets.Values.get(spreadsheetId, 'F2:F14').values,
      names: Sheets.Spreadsheets.Values.get(spreadsheetId, 'A2:A14').values,
      emails: Sheets.Spreadsheets.Values.get(spreadsheetId, 'E2:E14').values,
      links: Sheets.Spreadsheets.Values.get(spreadsheetId, 'D2:D14').values
    }
    //for(let name of values){
    for(let id in artmasters.ids){
      let talentedRecruit = new Artist(artmasters.names[id], artmasters.ids[id]);
      talentedRecruit.visitCard(artmasters.names[id], artmasters.names[id])
    }
    console.log(Artist);
  }

  function test(){
    console.log(Drive.Changes.list());
    //console.log(UrlFetchApp.fetch(
    //  'https://freeipapi.com/api/json/'
    //).getContentText());
    
    //console.log(Drive.Files.list())
  }