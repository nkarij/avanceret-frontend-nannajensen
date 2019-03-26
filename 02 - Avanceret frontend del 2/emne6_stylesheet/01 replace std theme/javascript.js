document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    let buttonReplaceTheme = document.querySelector(".replace-theme");
    let buttonRemoveTheme = document.querySelector(".remove-theme");
    let styleSheetElement = document.querySelector("head link");
    // console.log(styleSheetElement);

    // version 1a + b - set attribute...
    // styleSheetElement.href = "style2.css";
    // styleSheetElement.setAttribute("href", "style2.css");

    // version 2 - replace string
    // let standardStyleSheetName = styleSheetElement.getAttribute("href");
    // console.log(typeof(standardStyleSheetName));
    // console.log(standardStyleSheetName);
    // styleSheetElement.href = standardStyleSheetName.replace("style.css", "style2.css");

    // version 3 - med buttons
    buttonReplaceTheme.addEventListener('click', () => {
        // console.log("element trykket");
        styleSheetElement.href = "style2.css";
    });

    buttonRemoveTheme.addEventListener('click', () => {
        styleSheetElement.href = "style.css";
    });

});