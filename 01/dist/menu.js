
let hamburgerMenu = document.querySelector(".menu-icon");
let dropdownMenu = document.querySelector(".main-navigation");
let dropdownMenuColor = document.querySelector(".menus-section");

function toggleMenu(){
    dropdownMenu.classList.toggle("main-navigation--show");
    dropdownMenuColor.classList.toggle("menus-section--colorchange");
}

hamburgerMenu.addEventListener('click', toggleMenu);


// mangler at skjule menu igen. havde ikke tid. 
// det virker også kun på startsiden, da jeg ændrede nogle classe
// Det var det sidste jeg lavede. Havde overset det :D


