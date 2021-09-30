document.getElementById("sendReset").addEventListener("click", ()=> {
    document.getElementById("article").innerHTML= "<h2>Reset.css</h2>" +
          "<p>Un reset.css est inclus nativement dans Pack.js, celui-ci vous permet de remettre à zéro" +
          "les configurations natives des navigateurs. Le reset utilisé est le suivant :</p>" +
          "<p>a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, fieldset, figcaption, figure, font, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, p, pre, q, s, samp, section, small, span, strike, strong, sub, summary, sup, svg, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n" +
        "  margin: 0;\n" +
        "  padding: 0;\n" +
        "  border: 0;\n" +
        "  font-size: 100%;\n" +
        "  font: inherit;\n" +
        "  vertical-align: baseline;\n" +
        "  font-weight: 400;\n" +
        "}\n" +
        "\n" +
        "mark {\n" +
        "  background-color: transparent;\n" +
        "}</p>";
})
