document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");

    let productElementsArray = document.querySelectorAll(".price");
    // console.log(productElement.dataset.pris);
    productElementsArray.forEach(product => {
        product.addEventListener('click', () => {         
            // console.log("der er trykket på elementet");
            // console.log(product);
            let productDisplayName = document.querySelector(".product-display__name");
            let productDisplayPrice = document.querySelector(".product-display__price");

            productDisplayName.innerHTML = product.innerHTML;
            productDisplayPrice.innerHTML = product.dataset.pris;
            // console.log(product.dataset.pris);
        });    
    });
});