document.addEventListener("DOMContentLoaded", ()=>{
    // alert("Fedtmule");
    // hvis der bliver tid skal billedstørrelsen tilrettes device-størrelse.

    let imageFolder = {
        picture1: "IMG/food/morgenmad-big.jpg",
        picture2: "IMG/food/frokost-big.jpg",
        picture3: "IMG/food/table-big.jpg"
    }

    let slideshowContainer = document.querySelector(".slideshow");
    let radioButtonsContainer = document.querySelector(".radiobuttons");


    let imageSlide = function somename(){
        for (var key in arguments[0]) {
            let listItem = document.createElement("li");
            listItem.classList.add("slide");
            let link = document.createElement("a");
            // tlføj evt class på link. 
            let image = document.createElement("img");
            image.classList.add("slide__image");
            slideshowContainer.insertAdjacentElement("beforeend", listItem);
            listItem.insertAdjacentElement("afterbegin", link);
            link.insertAdjacentElement("afterbegin", image);
            image.setAttribute("src", imageFolder[key]);
            // okay, her tager vi lige den hurtige løsning:
            
        }
    }(imageFolder);

    // NY OPGAVE

    let imageSlidesArray = document.querySelectorAll(".slide");
    let slideIndex = 0;

    createDot();
   
    function createDot(){
        for (var index = 0; index < imageSlidesArray.length; index++) {
            let singleRadioButton = '<input type="radio" name="radiobutton" class="sliderdot" value="' + index + '"></input>';
            radioButtonsContainer.insertAdjacentHTML("beforeend", singleRadioButton);         
        };
    }
  
    function showSlide(n) {
        // hide all slides
        imageSlidesArray.forEach(item => {
            item.style.display = "none";
        });
        // show current slide
        imageSlidesArray[n].style.display = "block";
        // get all input-tags and set property .checked = true, on current input (n)
        radioButtonsContainer.querySelectorAll('input')[n].checked = true;
    };

    function changeByDots(event) {
    /** currentTarget is the parent-container */
        if(event.target !== event.currentTarget) {
            slideIndex = parseInt(event.target.getAttribute('value'));
            // console.log(slideIndex);
            event.target.blur();
            showSlide(slideIndex);
            console.log(slideIndex);
        }
    /* stops the click from being registeret by other targets*/
        event.stopPropagation();
    }

    // eventlistener on dot-div
    radioButtonsContainer.addEventListener('click', changeByDots);

    // AUTOMATED SLIDESHOW
    autoSlides();

    function autoSlides() {
        var i;
        // var slides = document.getElementsByClassName("myslides");
        // hide all slides
        for (i = 0; i < imageSlidesArray.length; i++) {
            imageSlidesArray[i].style.display = "none"; 
            }
        // loop slides 
        slideIndex++;
        // until slideIndex is above imageArray Length, then start over
        if (slideIndex > imageSlidesArray.length) {
            slideIndex = 1;
        } 
        imageSlidesArray[slideIndex-1].style.display = "block";

        // Change image every 4 seconds
        setTimeout(autoSlides, 4000); 
    }
        
})