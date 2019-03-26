document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    // IFHT VERSION 01 ER AT HER SAT ET EKSTRA LINK-TAG IND I HTML
    // DERFOR KAN DEFAULT.CSS IMPORTERES I THEMA = FÅ CSS ÆNDRINGER.

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