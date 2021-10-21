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
    id("select").style.display="block";
})

id("sendSelectAll").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("selectAll").style.display="block";
})

id("sendMenu").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("menu").style.display="block";
})

id("sendAnimateCss").addEventListener("click", ()=> {
    selectAll(".inArticle").forEach((element) =>id(element.id).style.display="none");
    id("animated").style.display="block";
})

clickAlerte("demoAlerte", "Votre texte ici");
clickAlerte("demoAlerte2", "Votre texte ici");

// listen for event
document.querySelectorAll('.exempleAnimate').forEach((element) =>
    element.addEventListener('click', () => {
        if (document.querySelector("#" + element.id).dataset.status==="0") checkLetterChosen(element.id);
    }));

id("my-element1").addEventListener("click", ()=> {
    animateCss('#my-element1', 'bounce');
})
id("my-element2").addEventListener("click", ()=> {
    animateCss('#my-element2', 'flash');
})
id("my-element3").addEventListener("click", ()=> {
    animateCss('#my-element3', 'pulse');
})
id("my-element4").addEventListener("click", ()=> {
    animateCss('#my-element4', 'rubberBand');
})
/*    <div id="my-element2" className="exempleAnimate">animateCss('#my-element2', 'flash');</div>
    <div id="my-element3" className="exempleAnimate">animateCss('#my-element3', 'pulse');</div>
    <div id="my-element4" className="exempleAnimate">animateCss('#my-element4', 'rubberBand');</div>
    <div id="my-element5" className="exempleAnimate">animateCss('#my-element5', 'shakeX');</div>
    <div id="my-element6" className="exempleAnimate">animateCss('#my-element6', 'shakeY');</div>
    <div id="my-element7" className="exempleAnimate">animateCss('#my-element7', 'headShake');</div>
    <div id="my-element8" className="exempleAnimate">animateCss('#my-element8', 'swing');</div>
    <div id="my-element9" className="exempleAnimate">animateCss('#my-element9', 'tada');</div>
    <div id="my-element10" className="exempleAnimate">animateCss('#my-element10', 'wobble');</div>
    <div id="my-element11" className="exempleAnimate">animateCss('#my-element11', 'jello');</div>
    <div id="my-element12" className="exempleAnimate">animateCss('#my-element12', 'heartBeat');</div>
    <div id="my-element13" className="exempleAnimate">animateCss('#my-element13', 'backInDown');</div>
    <div id="my-element14" className="exempleAnimate">animateCss('#my-element14', 'backInLeft');</div>
    <div id="my-element15" className="exempleAnimate">animateCss('#my-element15', 'backInRight');</div>
    <div id="my-element16" className="exempleAnimate">animateCss('#my-element16', 'backInUp');</div>
    <div id="my-element17" className="exempleAnimate">animateCss('#my-element17', 'bounceIn');</div>
    <div id="my-element18" className="exempleAnimate">animateCss('#my-element18', 'bounceInDown');</div>
    <div id="my-element19" className="exempleAnimate">animateCss('#my-element19', 'bounceInLeft');</div>
    <div id="my-element20" className="exempleAnimate">animateCss('#my-element20', 'bounceInRight');</div>
    <div id="my-element21" className="exempleAnimate">animateCss('#my-element21', 'bounceInUp');</div>
    <div id="my-element22" className="exempleAnimate">animateCss('#my-element22', 'bounceOut');</div>
    <div id="my-element23" className="exempleAnimate">animateCss('#my-element23', 'bounceOutDown');</div>
    <div id="my-element24" className="exempleAnimate">animateCss('#my-element24', 'bounceOutLeft');</div>
    <div id="my-element25" className="exempleAnimate">animateCss('#my-element25', 'bounceOutRight');</div>
    <div id="my-element26" className="exempleAnimate">animateCss('#my-element26', 'bounceOutUp');</div>*/
