// OPGAVE: dupliker html-template-blok til nyt tomt elementer (evt flere), 
// det er smart med fx cards eller galleri-cards.
// så kan man derefter tilgå properties i det nye element, 
// uden at det ændrer ved templaten, som evt. kan bruges andre steder.

// "database" - til at indsætte i html
let dataProducts = [
    {
        title: "asse",
        description: "nasse"
    },
    {
        title: "basse",
        description: "kasse"
    }
]

console.log(dataProducts);

// gem den template-blok som skal duplikeres
let productTemplateElement = document.querySelector("#html-templates .product");
// gem det parentelement, som templates skal indsættes i
let allProductsElement = document.querySelector(".products");

// loop data
dataProducts.forEach(product => {
    // gem ny - tom - instans af product:
    let productElement;
    // klon template til ny instans
    productElement = productTemplateElement.cloneNode(true);
    // skift childrens innerhtml
    productElement.querySelector(".product__title").innerHTML = product.title;
    productElement.querySelector(".product__description").innerHTML = product.description;
    // insert i html-document
    allProductsElement.appendChild(productElement);

});