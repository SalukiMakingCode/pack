id("sendReset").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("reset").style.display="block";
})

id("sendAnimate").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("animate").style.display="block";
})

id("sendAlerte").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("alerte").style.display="block";
})

id("sendClickAlerte").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("clickAlerte").style.display="block";
})

id("sendRand").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("rand").style.display="block";
})

id("sendId").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("id").style.display="block";
})

id("sendSelect").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("id").style.display="block";
})

id("sendSelectAll").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("id").style.display="block";
})

clickAlerte("demoAlerte", "Votre texte ici");
clickAlerte("demoAlerte2", "Votre texte ici");