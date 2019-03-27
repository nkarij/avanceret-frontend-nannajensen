// ØVELSE: 
// brug loop til at indsætte data fra elementers data-attribut + navn.

document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    // hent de elementer som indeholder dataset.pris til et array
    let productElementsArray = document.querySelectorAll(".price");
    // console.log(productElement.dataset.pris);

    // for hvert element i array:
    productElementsArray.forEach(product => {
        // tilføj click-event
        product.addEventListener('click', () => {         
            // console.log("der er trykket på elementet");
            // console.log(product);
            // hent display elementerne, gem i variabel 
            let productDisplayName = document.querySelector(".product-display__name");
            let productDisplayPrice = document.querySelector(".product-display__price");
            // overskriv displayelementets innerhtml 
            // med dataset-elementets oplysninger (innerhtml + dataset)
            productDisplayName.innerHTML = product.innerHTML;
            productDisplayPrice.innerHTML = product.dataset.pris;
            // console.log(product.dataset.pris);
        });    
    });
});