//(() => {
// insère le css du pack
let cssId = 'packCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://salukimakingcode.github.io/pack/pack.css';
    link.media = 'all';
    head.appendChild(link);
}

let cssId2 = 'animateCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId2))
{
    let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    link.id   = cssId2;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    link.media = 'all';
    head.appendChild(link);
}

//alerte() replace alert()
function alerte(text) {
    if (!document.getElementById("alert")) {
        let doc=document.body;
        let alert=document.createElement('div');
        alert.id="alert";
        alert.className="animate__animated animate__backInDown";
        doc.append(alert);
        let alertContent=document.createElement('div');
        alertContent.id="alert-content";
        alert.prepend(alertContent);
        let alertClose=document.createElement('div');
        alertClose.id="alertClose";
        alertContent.prepend(alertClose);
        let alertText=document.createElement('div');
        alertText.id="alertText";
        alertContent.prepend(alertText);
        let alertCloseButton=document.createElement('span');
        alertCloseButton.id="alertCloseButton";
        alertCloseButton.textContent="Ok";
        alertClose.prepend(alertCloseButton);
        document.getElementById("alertCloseButton").addEventListener("click", ()=> {
            document.getElementById("alert").style.display="none";})
    }
    document.getElementById("alertText").innerHTML=text;
    document.getElementById("alert").style.display="flex";
}
// execute un code js quand on clique sur un element.id
function clickId (id, operation) {
    document.getElementById(id).addEventListener("click", ()=> {
        eval(operation);
    })
}
// affiche une alerte() quand on clique sur un element (par id) avec le texte attendu
function clickAlerte (id, text) {
    document.getElementById(id).addEventListener("click", ()=> {
        alerte(text);
    })
}
//execute un rand facile
function rand(nombre, base) {
    if (base===undefined) base=1;
    return (Math.floor(Math.random()*nombre))+base;
}
//})();