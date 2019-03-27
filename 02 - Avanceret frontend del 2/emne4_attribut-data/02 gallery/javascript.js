// OPGAVE: brug html-template m dataset m billed-stier til at lave en slider
// ved at sætte currentImage.src = dataset[index]
// dataset består af urls/billedstier
// NB! img-tags har ikke dataset mulighed, brug fx div

document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    // lav et index, som sættes til 0
    let index = 0;

    // opret array af billedelementerne
    let imageArray = document.querySelectorAll("#image-data div");
    // console.log(imageDataArray);

    // gem reference til currentImage og buttons
    let currentImage = document.querySelector("#current-image");
    let buttonNextImage = document.querySelector("#btn-next-image");
    let buttonPreviousImage = document.querySelector("#btn-previous-image");

    // opret ny dataarray til elementernes dataset
    let imageDataArray = [];

    // loop billederne og push hvert images dataset til dataarray
    imageArray.forEach(image => {
        imageDataArray.push(image.dataset.url);
        // console.log(image.dataset.url);
    });

    // sæt currentImages source lig med dataarray[index]
    // så index styrer hvilken billedsti som vises
    currentImage.src = imageDataArray[index];
    // console.log(currentImage);

    // opret click-event til button (next image)
    buttonNextImage.addEventListener('click', function() {
        // læg +1 til index
        index++;
        // console.log(index);
        // betingelse/undtagelse:
        // hvis index er længere end dataarray, sæt index til 0
        // dette får slideren til at loope/starte forfra
        if(index >= imageDataArray.length){
            index = 0;
        }
        // sæt currentImages source lig med dataarray[index]
        // så index styrer hvilken billedsti som vises
        currentImage.src = imageDataArray[index];
    });

    // console.log(imageDataArray[index]);
    // se button (next image)
    buttonPreviousImage.addEventListener('click', () => {
        if(index <= 0) {
            index = imageDataArray.length;
        }
        index--;
        // console.log(index);
        currentImage.src = imageDataArray[index];
    });
   

}); 