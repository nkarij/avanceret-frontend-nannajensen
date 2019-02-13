// FORM VALIDATION

// det er ikke samme contactform som jeg bruger lige pt. men det kan det blive
let contactForm = document.querySelector('.form');
let inputValueArray = [];

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log(event);
    console.log(event.target);
    // name
    if(event.target[0].value == "" || !isNaN(event.target[0].value) || event.target[0].value.length < 2 || event.target[0].value.length > 20) {
        alert("this name is invalid. please try again");
        event.target[index].style.backgroundColor = "red";
        return false;
    } else {
        event.target[0].style.backgroundColor = "transparent";
        inputValueArray.push(event.target[0].value);
        // console.log(event.target[0].value);
        // console.log(inputValueArray);
    }
    if (event.target[1].value == "" || !isNaN(event.target[1].value) || event.target[1].value.length < 2 || event.target[1].value.length > 20) {
        event.target[1].style.backgroundColor = "red";
        alert("this surname is invalid. please try again");
        return false;
    }else {
        event.target[1].style.backgroundColor = "transparent";
        inputValueArray.push(event.target[1].value);
    }        
    if(regExEmail(event.target[2].value)){
        event.target[2].style.backgroundColor = "transparent";
        inputValueArray.push(event.target[2].value);
        }else{
        event.target[2].style.backgroundColor = "red";
        alert("this email is invalid. please try again");
        return false;
    }
    if(event.target[3].value == "" || isNaN(event.target[3].value) || event.target[3].value.length !=8) { 
            event.target[3].style.backgroundColor = "red";
            alert("this phone number is invalid. use 8 digits");
            return false;
    } else {
        event.target[3].style.backgroundColor = "transparent";
        inputValueArray.push(event.target[3].value);
    }
    if(event.target[4].value.length > 130) {
            alert("Max 130 characters allowed.");
            event.target[4].style.backgroundColor = "red";
            return false;
    }else {
        event.target[4].style.backgroundColor = "transparent";
        inputValueArray.push(event.target[4].value);
    }

    saveToStorage();

    function saveToStorage(){
        // der skal gemmes et array, men længden skal skrives til cart. localstorage kan kun læse strings, derfor skal inhold af array konverteres til strings.
        localStorage.setItem('saveItems', JSON.stringify(inputValueArray));
    }

    contactForm.submit();

});

// REG EX
function regExEmail(email){
    var regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
    return regEx.test(String(email).toLowerCase()); 
};