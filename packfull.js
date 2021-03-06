// insère le css du pack
let cssId1 = 'animateCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId1))
{
    let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    link.id   = cssId1;
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
//function clickId (id, operation) {
//    document.getElementById(id).addEventListener("click", ()=> {
//        eval(operation);
//    })
//}
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


function elementMenu(name, url, title, fontSize, img, blank) {
    let size=(fontSize/3)*2;
    let order=document.getElementsByClassName("pack_menu_li").length;
    let elem = document.createElement('li');
    let elemBurger = document.createElement('li');
    if (blank==="" || blank==="no" || blank===undefined) blank="";
    else blank=" target='_blank'";
    if (fontSize==="" || fontSize==="no" || fontSize===undefined) {
        let height=id("pack_menu_nav").style.height;
        height=height.split("rem");
        fontSize=(height[0]/11)*5;
        size=(fontSize/3)*2;
        fontSize=fontSize+"rem";
    }
    else fontSize=fontSize+"rem";
    elem.id = "pack_menu_li"+order;
    elem.className = "pack_menu_li";
    if (img==="" || img===undefined) elem.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'>"+name+"</a>";
    else elem.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'><img src='"+img+"' alt='"+name+"' class='iconeMenu' style='height:"+size+"rem;'/>"+name+"</a>";
    elem.style.fontSize=fontSize;
    id("pack_menu_ul").append(elem);
    elemBurger.id = "pack_menu_burger_li"+order;
    elemBurger.className = "pack_menu_burger_li";
    if (img==="" || img===undefined) elemBurger.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'>"+name+"</a>";
    else elemBurger.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'><img src='"+img+"' alt='"+name+"' class='iconeMenu' style='height:"+size+"rem;'/>"+name+"</a>";
    elemBurger.style.fontSize=fontSize;
    id("pack_menu_burger_ul").append(elemBurger);
}

function elementGroupMenu(name, title, fontSize, img) {
    let size=(fontSize/3)*2;
    let order=document.getElementsByClassName("pack_menu_li").length;
    let elem = document.createElement('li');
    let elemBurger = document.createElement('li');
    if (fontSize==="" || fontSize==="no" || fontSize===undefined) {
        let height=id("pack_menu_nav").style.height;
        height=height.split("rem");
        fontSize=(height[0]/11)*5;
        size=(fontSize/3)*2;
        fontSize=fontSize+"rem";
    }
    else fontSize=fontSize+"rem";
    elem.id = "pack_menu_li"+order;
    elem.className = "pack_menu_li";
    if (img==="" || img===undefined) elem.innerHTML="<a href=\"javascript:askForSousMenu(\'pack_menu_li" + order + "\');\" title=\""+title+"\">"+name+"</a>";
    else elem.innerHTML="<a href=\"javascript:askForSousMenu(\'pack_menu_li" + order + "\');\" title=\""+title+"\"><img src='"+img+"' alt='"+name+"' class='iconeMenu' style='height:"+size+"rem;'/>"+name+"</a>";
    elem.style.fontSize=fontSize;
    id("pack_menu_ul").append(elem);
    elemBurger.id = "pack_menu_burger_li"+order;
    elemBurger.className = "pack_menu_burger_li";
    if (img==="" || img===undefined) elemBurger.innerHTML="<a href='#' title='"+title+"'>"+name+"</a>";
    else elemBurger.innerHTML="<a href='#' title='"+title+"'><img src='"+img+"' alt='"+name+"' class='iconeMenu' style='height:"+size+"rem;'/>"+name+"</a>";
    elemBurger.style.fontSize=fontSize;
    id("pack_menu_burger_ul").append(elemBurger);
}

function askForSousMenu(id) {
    let numId=id.substring(12, 17);
    if (document.getElementById("pack_sous_menu_div" + numId).style.display==="none") {
      document.getElementById("pack_sous_menu_div" + numId).style.display="block";
    }
    else {
        document.getElementById("pack_sous_menu_div" + numId).style.display="none";
    }
}

function elementSousMenu(name, url, title, fontSize, img, blank) {
    let size=(fontSize/3)*2;
    let order=document.getElementsByClassName("pack_menu_li").length-1;
    let orderSousMenu=document.getElementsByClassName("pack_sous_menu_li" + order).length;
    if (orderSousMenu===0) {
        let elemDiv = document.createElement('div');
        elemDiv.id="pack_sous_menu_div" + order;
        elemDiv.className="pack_sous_menu_div";
        elemDiv.style.position="absolute";
        elemDiv.style.display="none";
        elemDiv.style.backgroundColor=document.getElementsByTagName("header")[0].style.backgroundColor;
        id("pack_menu_li" + order).append(elemDiv);
        let space = document.createElement('div');
        space.style.height = "0.8rem";
        id("pack_sous_menu_div" + order).append(space);
    }
    let elem = document.createElement('li');
    let elemBurger = document.createElement('li');
    if (blank==="" || blank==="no" || blank===undefined) blank="";
    else blank=" target='_blank'";
    if (fontSize==="" || fontSize==="no" || fontSize===undefined) {
        let height=id("pack_menu_nav").style.height;
        height=height.split("rem");
        fontSize=(height[0]/11)*5;
        size=(fontSize/3)*2;
        fontSize=fontSize+"rem";
    }
    else fontSize=fontSize+"rem";
    elem.id = "pack_sous_menu_li" + orderSousMenu;
    elem.className = "pack_sous_menu_li" + order;
    if (img==="" || img===undefined) elem.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'>"+name+"</a>";
    else elem.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'><img src='"+img+"' alt='"+name+"' class='iconeMenu' style='height:"+size+"rem;'/>"+name+"</a>";
    elem.style.fontSize=fontSize;
    id("pack_sous_menu_div" + order).append(elem);
    size=(size/10)*8;
    elemBurger.id = "pack_sous_menu_burger_li" + orderSousMenu;
    elemBurger.className = "pack_sous_menu_burger_li" + order;
    if (img==="" || img===undefined) elemBurger.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'>"+name+"</a>";
    else elemBurger.innerHTML="<a href='"+url+"' "+blank+" title='"+title+"'><img src='"+img+"' alt='"+name+"' class='iconeMenu' style='height:"+size+"rem;'/>"+name+"</a>";
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

const animateCss = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

async function load(contenu, id) {
    const response = await fetch(contenu);
    const pages = await response.text();
    document.getElementById(id).innerHTML=pages;
}