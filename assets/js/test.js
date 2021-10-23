createMenu("FF333D", "FFFFFF", "4", "90", "");
elementMenuLogo ("./assets/img/logo-test.jpg", "logo free");
elementMenu ("Accueil", "test.html", "home", "1.5", "./assets/img/icone.png", "yes");
elementMenu ("Accueil2", "accueil.html", "home", "1.5", "./assets/img/icone.png", "" );
elementMenu ("Accueil3", "baam.html", "home", "1.5" , "", "");
elementMenu ("Accueil4", "lalala.html", "home", "1.5", "", "" );
elementMenu ("Accueil5", "lalala.html", "home", "1.5", "", "" );
elementMenu ("Accueil6", "lalala.html", "home", "1.5", "", "" );
elementMenu ("Accueil7", "lalala.html", "home", "1.5", "", "" );

load("https://www.belgiantrain.be/fr", "my-element3");

id("my-element").addEventListener("click", ()=> {
    animateCss('#my-element', 'bounce');
})

