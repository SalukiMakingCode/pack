let cssId2="animateCss";if(!document.getElementById(cssId2)){let e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.id=cssId2,t.rel="stylesheet",t.type="text/css",t.href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",t.media="all",e.appendChild(t)}function alerte(e){if(!document.getElementById("alert")){let e=document.body,t=document.createElement("div");t.id="alert",t.className="animate__animated animate__backInDown",e.append(t);let n=document.createElement("div");n.id="alert-content",t.prepend(n);let a=document.createElement("div");a.id="alertClose",n.prepend(a);let l=document.createElement("div");l.id="alertText",n.prepend(l);let d=document.createElement("span");d.id="alertCloseButton",d.textContent="Ok",a.prepend(d),document.getElementById("alertCloseButton").addEventListener("click",()=>{document.getElementById("alert").style.display="none"})}document.getElementById("alertText").innerHTML=e,document.getElementById("alert").style.display="flex"}function clickId(id,operation){document.getElementById(id).addEventListener("click",()=>{eval(operation)})}function clickAlerte(e,t){document.getElementById(e).addEventListener("click",()=>{alerte(t)})}function rand(e,t){return void 0===t&&(t=1),Math.floor(Math.random()*e)+t}function id(e){return document.getElementById(e)}function select(e){return document.querySelector(e)}function selectAll(e){return document.querySelectorAll(e)}function createMenu(e,t,n,a,l){let d=document.body;if(0===document.getElementsByTagName("header").length){let e=document.createElement("header");e.id="pack_header",e.className="pack_header",d.prepend(e)}else document.getElementsByTagName("header")[0].id="pack_header",document.getElementsByTagName("header")[0].className="pack_header";a?a+="%":a="80%",document.getElementsByTagName("header")[0].style.width=a,e=e&&""!==e?"#"+e:"#000000",document.getElementsByTagName("header")[0].style.backgroundColor=e,t=t?"#"+t:"#FFFFFF",document.getElementsByTagName("header")[0].style.color=t,document.getElementsByTagName("header")[0].style.a=t;let c=document.createElement("nav");c.id="pack_menu_nav",c.className="pack_menu_nav",n?n+="rem":n="2rem",c.style.height=n,id("pack_header").prepend(c);let r=document.createElement("ul");r.id="pack_menu_ul",r.className="pack_menu_ul",""!==l&&void 0!==l||(r.style.justifyContent="space-around"),"center"===l&&(r.style.justifyContent="center"),"space-around"===l&&(r.style.justifyContent="space-around"),"space-between"===l&&(r.style.justifyContent="space-between"),"flex-end"===l&&(r.style.justifyContent="flex-end"),"flex-start"===l&&(r.style.justifyContent="flex-start"),id("pack_menu_nav").prepend(r);let m=document.createElement("img");m.src="./assets/img/burger.svg",m.id="pack_burger",id("pack_menu_nav").prepend(m);let i=document.createElement("div");i.id="pack_menu_burger",i.className="pack_menu_burger",i.style.display="none",id("pack_menu_nav").after(i);let s=document.createElement("ul");s.id="pack_menu_burger_ul",s.className="pack_menu_burger_ul",id("pack_menu_burger").prepend(s),id("pack_burger").addEventListener("click",()=>{"none"===id("pack_menu_burger").style.display?id("pack_menu_burger").style.display="flex":"flex"===id("pack_menu_burger").style.display&&(id("pack_menu_burger").style.display="none")}),window.onresize=function(){window.screen.width>800&&(id("pack_menu_burger").style.display="none")}}function elementMenu(e,t,n,a,l,d){let c=a/3*2,r=document.getElementsByClassName("pack_menu_li").length,m=document.createElement("li"),i=document.createElement("li");if(d=""===d||"no"===d||void 0===d?"":" target='_blank'",""===a||"no"===a||void 0===a){let e=id("pack_menu_nav").style.height;c=(a=(e=e.split("rem"))[0]/11*5)/3*2,a+="rem"}else a+="rem";m.id="pack_menu_li"+r,m.className="pack_menu_li",m.innerHTML=""===l||void 0===l?"<a href='"+t+"' "+d+" title='"+n+"'>"+e+"</a>":"<a href='"+t+"' "+d+" title='"+n+"'><img src='"+l+"' alt='"+e+"' class='iconeMenu' style='height:"+c+"rem;'/>"+e+"</a>",m.style.fontSize=a,id("pack_menu_ul").append(m),i.id="pack_menu_burger_li"+r,i.className="pack_menu_burger_li",i.innerHTML=""===l||void 0===l?"<a href='"+t+"' "+d+" title='"+n+"'>"+e+"</a>":"<a href='"+t+"' "+d+" title='"+n+"'><img src='"+l+"' alt='"+e+"' class='iconeMenu' style='height:"+c+"rem;'/>"+e+"</a>",i.style.fontSize=a,id("pack_menu_burger_ul").append(i)}function elementMenuLogo(e,t){let n=document.createElement("img");n.src=e,n.alt=t;let a=id("pack_menu_nav").style.height;a=a.split("rem"),n.style.height=6*a[0]/7+"rem",id("pack_menu_nav").prepend(n)}