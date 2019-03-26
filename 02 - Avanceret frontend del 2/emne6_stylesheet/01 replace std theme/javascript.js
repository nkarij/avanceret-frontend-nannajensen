document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    // REPLACE DEFAULT THEME    
    // her anvendes kun 1 link-tag i head. 
    // Dvs. at link-taggets href skal erstattes med ny css-fil-sti

    let buttonReplaceTheme = document.querySelector(".replace-theme");
    let buttonRemoveTheme = document.querySelector(".remove-theme");
    let styleSheetElement = document.querySelector("head link");
    // console.log(styleSheetElement);

    // version 1a + b - set attribute href på 2 forskellige måder
    // styleSheetElement.href = "style2.css";
    // styleSheetElement.setAttribute("href", "style2.css");

    // version 2 - replace string
    // let standardStyleSheetName = styleSheetElement.getAttribute("href");
    // console.log(typeof(standardStyleSheetName));
    // console.log(standardStyleSheetName);
    // styleSheetElement.href = standardStyleSheetName.replace("style.css", "style2.css");

    // version 3 - replace theme vha buttons
    buttonReplaceTheme.addEventListener('click', () => {
        // console.log("element trykket");
        styleSheetElement.href = "style2.css";
    });

    buttonRemoveTheme.addEventListener('click', () => {
        styleSheetElement.href = "style.css";
    });

});