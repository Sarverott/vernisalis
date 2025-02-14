

//class Person{

//}

class Artist{
  static Regist(name, artistCardHook, artistID){
    const STATUS = !this.LIST.hasOwnProperty(name) && !this.ID_LIST.hasOwnProperty(artistID)
    if(STATUS){
      this.LIST[name]=artistCardHook;
      this.ID_LIST[artistID]=artistCardHook;
    }
    return STATUS;
  }
  constructor(name, artistID){
    if( this.constructor.Regist(name, this, artistID) ){
      this.artistID=artistID
      this.name=name;
    }
    //this.visitCard={}
  }
  visitCard(email=null,websiteLink=null,phone=null){
    this.email=email;
    this.website=websiteLink
    this.phone=phone
  }

}



Artist.LIST={};
Artist.ID_LIST={};

function read() {
  let spreadsheetId = '1wVv6jxC4GZR8O_7w1dGA3F6Xe1z_wHjkxzzwvvfpAR8';
  
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

/*
class VisitCard{
  static FETCH(){

  }
  static PUSH(){
    
  }
  static PULL(){
    
  }
  static STATUS(){
    
  }
  addExtensives(setupObject){
    //this.links=
    this._internalData={};
  }
  get procedures(bindover={}){
    let procCall = bindover;
    procCall.
  }
  field(label){
    this._internalData[label]=null;
    Object.defineProperty(this, label, {
      get: function(){
        this.procedures.();
        return this._internalData[label];
      }
      set: function(data){
        this._internalData[label]=data
        }
    });
    return {

    }
  }
}*/