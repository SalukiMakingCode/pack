document.getElementById("sendReset").addEventListener("click", ()=> {
    document.querySelectorAll(".inArticle").forEach((element) =>document.getElementById(element.id).style.display="none");
    document.getElementById("reset").style.display="block";
})

document.getElementById("sendAnimate").addEventListener("click", ()=> {
    document.querySelectorAll(".inArticle").forEach((element) =>document.getElementById(element.id).style.display="none");
    document.getElementById("animate").style.display="block";
})

document.getElementById("sendAlerte").addEventListener("click", ()=> {
    document.querySelectorAll(".inArticle").forEach((element) =>document.getElementById(element.id).style.display="none");
    document.getElementById("alerte").style.display="block";
})

document.getElementById("sendClickAlerte").addEventListener("click", ()=> {
    document.querySelectorAll(".inArticle").forEach((element) =>document.getElementById(element.id).style.display="none");
    document.getElementById("clickAlerte").style.display="block";
})

document.getElementById("sendRand").addEventListener("click", ()=> {
    document.querySelectorAll(".inArticle").forEach((element) =>document.getElementById(element.id).style.display="none");
    document.getElementById("rand").style.display="block";
})

document.getElementById("sendId").addEventListener("click", ()=> {
    document.querySelectorAll(".inArticle").forEach((element) =>document.getElementById(element.id).style.display="none");
    document.getElementById("id").style.display="block";
})

clickAlerte("demoAlerte", "Votre texte ici");
clickAlerte("demoAlerte2", "Votre texte ici");