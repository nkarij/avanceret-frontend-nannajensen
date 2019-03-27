// OPGAVE: brug classlist til at style billeder i slider


document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    let imageIndex = 0;

    let imageArray = document.querySelectorAll("#image-data div");
    // console.log(imageDataArray);
    let currentImage = document.querySelector("#current-image");

    let buttonNextImage = document.querySelector("#btn-next-image");
    let buttonPreviousImage = document.querySelector("#btn-previous-image");

    let imageDataArray = [];

    imageArray.forEach(image => {
        imageDataArray.push(image.dataset.url);
        // console.log(image.dataset.url);
    });

    currentImage.src = imageDataArray[imageIndex];
    // console.log(currentImage);

    buttonNextImage.addEventListener('click', function() {
        imageIndex++;
        // console.log(imageIndex);
        if(imageIndex >= imageDataArray.length){
            imageIndex = 0;
        }
        currentImage.src = imageDataArray[imageIndex];
        currentImage.classList.add("current-image-styling");
    });

    // console.log(imageDataArray[imageIndex]);

    buttonPreviousImage.addEventListener('click', () => {
        if(imageIndex <= 0){
            imageIndex = imageDataArray.length;
        }
        imageIndex--;
        // console.log(imageIndex);
        currentImage.src = imageDataArray[imageIndex];
        currentImage.classList.remove("current-image-styling");
    });

}); 