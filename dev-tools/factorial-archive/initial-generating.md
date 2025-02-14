
x=document.querySelector("pre").innerText.split("\n").filter((x)=>x[0]!="#").filter((x)=>x.trim()!="")
y=[]
while(x.length){
    y.push(
        x.splice(
            Math.floor(
                Math.random()*x.length
            ),
            1
        )[0]
    
    )
}
y.join("\n")

https://github.com/google/clasp?tab=readme-ov-file#login


clasp login --creds creds.json
clasp login --status
clasp login --redirect-port 37473


npm init 



git init
git remote add origin



clasp create --title VernisalisArtistJoinForm --rootDir "./src/google-apps/artist-join-form" --type forms
clasp create --title VernisalisGalleryExhibition --rootDir "./src/google-apps/gallery-exhibition" --type sheets
clasp create --title VernisalisWebVisitcart --rootDir "./src/google-apps/web-visitcart" --type webapp
clasp create --title VernisalisMailerController --rootDir "./src/google-apps/mailer-controller" --type api
clasp create --title VernisalisSliderTool --rootDir "./src/google-apps/slider-tool" --type slides