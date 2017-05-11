function ispis(){
    document.getElementById("Height").innerHTML = "";
    document.getElementById("Width").innerHTML = "";
    if (document.getElementById("Prvi").checked){
        document.getElementById("Height").innerText = window.innerHeight;
    }
    if (document.getElementById("Drugi").checked){
        document.getElementById("Width").innerHTML += window.innerWidth;
    }
}
function otvori(){
    if(document.getElementById("gumbic").innerHTML == "Otvori"){
        prozor = window.open("","myWindow","width = 200, height=200");
        document.getElementById("gumbic").innerHTML = "Zatvori";
    }
    else if(document.getElementById("gumbic").innerHTML == "Zatvori"){
        prozor.close();
        document.getElementById("gumbic").innerHTML = "Otvori";
    }
}

function tri(){
    document.getElementById("jedan").innerHTML = "";
    document.getElementById("dva").innerHTML = "";
    document.getElementById("tri").innerHTML = "";
    document.getElementById("cetiri").innerHTML = "";
    if(document.getElementById("Check1").checked){
        document.getElementById("jedan").innerHTML = "Screen.width = " + screen.width;
    }
    if(document.getElementById("Check2").checked){
        document.getElementById("dva").innerHTML = "Screen.height = " + screen.height;
    }
    if(document.getElementById("Check3").checked){
        document.getElementById("tri").innerHTML = "Screen.availWidth = " + screen.availWidth;
    }
    if(document.getElementById("Check4").checked){
        document.getElementById("cetiri").innerHTML = "Screen.availHeight = " + screen.availHeight;
    }
}

function ispisi() {
    var gluposti = [window.location.href,window.location.hostname,window.location.pathname,window.location.protocol];
    for(var i in gluposti){
        console.log(gluposti[i]);
    }
}