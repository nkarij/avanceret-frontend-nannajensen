document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    // SKIFT TEMA VHA 1 BUTTON, BRUG CONDITIONAL
    // STADIG 2 LINK TAGS
    // IF-SÆTNING BESTEMMER HVILKET TEMA BUTTON.CLICK UDFØRER

    let buttonToggleTheme = document.querySelector(".toggle-theme");
    // let buttonRemoveTheme = document.querySelector(".remove-theme");
    let cssThemeElement = document.querySelector("#css-theme");
    // console.log(cssThemeElement.href);
    // console.log(typeof(cssThemeElement.href));
    // let defaultStyleSheetElement = document.querySelector("head link");
    // console.log(styleSheetElement);

    // version 3 - med buttons
    buttonToggleTheme.addEventListener('click', () => {
        // console.log("element trykket");
        // href("" [unknown]) kan ikke bruges i if-sætning til at tjekke om href er tom
        // fordi href("") == sidens url
        // her bruges htmls dataset i stedet, til at tjekke om tema er on/off
        if(cssThemeElement.dataset.state == "off"){
            cssThemeElement.dataset.state = "on";
            cssThemeElement.href = "css/style2.css";
            // console.log(cssThemeElement.dataset.state);
        } else if(cssThemeElement.dataset.state == "on") {
            cssThemeElement.dataset.state = "off";
            cssThemeElement.href = "";
            // console.log(cssThemeElement.dataset.state);
        }
    });


});