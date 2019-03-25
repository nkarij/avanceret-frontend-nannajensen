
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

// gem det product som skal duplikeres
let productTemplateElement = document.querySelector("#html-templates .product");
// gem hardcoded parentelement
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