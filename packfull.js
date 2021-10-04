// insère le css du pack
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

function id(elementId){
    return document.getElementById(elementId);
}
function select(selector){
    return document.querySelector(selector);
}
function selectAll(selector){
    return document.querySelectorAll(selector);
}
function createMenu(backgroundColor, color, height, width, align) {
    let doc = document.body;
    if (document.getElementsByTagName("header").length===0) {
        let header = document.createElement('header');
        header.id = "pack_header";
        header.className = "pack_header";
        doc.prepend(header);
    }
    else {
        document.getElementsByTagName("header")[0].id="pack_header";
        document.getElementsByTagName("header")[0].className="pack_header";
    }
    if (!width) width="80%";
    else width=width+"%";
    document.getElementsByTagName("header")[0].style.width=width;
    if (!backgroundColor || backgroundColor==="") backgroundColor="#000000";
    else backgroundColor="#"+backgroundColor;
    document.getElementsByTagName("header")[0].style.backgroundColor=backgroundColor;
    if (!color) color="#FFFFFF";
    else color="#"+color;
    document.getElementsByTagName("header")[0].style.color=color;
    document.getElementsByTagName("header")[0].style.a=color;
    let nav = document.createElement('nav');
    nav.id = "pack_menu_nav";
    nav.className = "pack_menu_nav";
    if (!height) height="2rem";
    else height=height+"rem";
    nav.style.height=height;
    id("pack_header").prepend(nav);
    let ul = document.createElement('ul');
    ul.id = "pack_menu_ul";
    ul.className = "pack_menu_ul";
    if (align==="" || align===undefined) ul.style.justifyContent="space-around";
    if (align==="center") ul.style.justifyContent="center";
    if (align==="space-around") ul.style.justifyContent="space-around";
    if (align==="space-between") ul.style.justifyContent="space-between";
    if (align==="flex-end") ul.style.justifyContent="flex-end";
    if (align==="flex-start") ul.style.justifyContent="flex-start";
    id("pack_menu_nav").prepend(ul);
    let burger = document.createElement('img');
    burger.src="./assets/img/burger.svg";
    burger.id="pack_burger";
    id("pack_menu_nav").prepend(burger);
    let menuBurger=document.createElement('div');
    menuBurger.id="pack_menu_burger";
    menuBurger.className="pack_menu_burger";
    menuBurger.style.display="none";
    id("pack_menu_nav").after(menuBurger);
    let ulBurger = document.createElement('ul');
    ulBurger.id = "pack_menu_burger_ul";
    ulBurger.className = "pack_menu_burger_ul";
    id("pack_menu_burger").prepend(ulBurger);
    id ("pack_burger").addEventListener("click", () => {
        if (id("pack_menu_burger").style.display==="none") {
            id("pack_menu_burger").style.display="flex";
        }
        else if (id("pack_menu_burger").style.display==="flex") {
            id("pack_menu_burger").style.display="none";
        }
    })

    window.onresize = function(){
        if (window.screen.width>800) {
            id("pack_menu_burger").style.display="none"
        }
    }



}

function elementMenu(name, url, title, fontSize, blank) {
    let order=document.getElementsByClassName("pack_menu_li").length;
    let elem = document.createElement('li');
    let elemBurger = document.createElement('li');
    if (blank==="" || blank==="no" || blank===undefined) blank="";
    else blank=" target='_blank'";
    if (fontSize==="" || fontSize==="no" || fontSize===undefined) {
        let height=id("pack_menu_nav").style.height;
        height=height.split("rem");
        fontSize=(height[0]/11)*5;
        fontSize=fontSize+"rem";
    }
    else fontSize=fontSize+"rem";
    elem.id = "pack_menu_li"+order;
    elem.className = "pack_menu_li";
    elem.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'>"+name+"</a>";
    elem.style.fontSize=fontSize;
    id("pack_menu_ul").append(elem);
    elemBurger.id = "pack_menu_burger_li"+order;
    elemBurger.className = "pack_menu_burger_li";
    elemBurger.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'>"+name+"</a>";
    elemBurger.style.fontSize=fontSize;
    id("pack_menu_burger_ul").append(elemBurger);
}

function elementMenuLogo(url, alt) {
    let img = document.createElement('img');
    img.src= url;
    img.alt=alt;
    let height=id("pack_menu_nav").style.height;
    height=height.split("rem");
    img.style.height=(height[0]*6)/7+"rem";
    id("pack_menu_nav").prepend(img);
}