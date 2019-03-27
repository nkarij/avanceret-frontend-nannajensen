// OPGAVE: Importer HTML-partial med JS
// og indsætte det i HTML-doc.
// Partials er små blokke af HTML, som skal genbruges på andre undersider
// og derefter er det nemt at rette i HTMLen, så der opdateres globalt.
// nemt for en designer at de ikke skal rette i JS, men i html.

document.addEventListener('DOMContentLoaded', () => {
    // alert("test");


    fetch("partials/partial_1.html")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.text();
    })
    .then((partial)=>{
        // console.log(partial);
        // henter nav-tag og indsætter partial før end-tag
        document.querySelector("nav").insertAdjacentHTML('beforeend', partial);

        // der kan først clones når den første partial er skrevet til HTML-dokumentet.
        // let partialMenuElement = document.querySelector(".partial_menu");
        // opret variabel til at gemme dublikeret Html (fra partialMenuElement)
        // let duplicatedNode = partialMenuElement.cloneNode(true);
        // // console.log(duplicatedNode);
        // her attaches den duplikerede html i SOME-Menu
        // let someNavElement = document.querySelector(".some-nav");
        // someNavElement.appendChild(duplicatedNode);

        // syntaks til cloneNode();
        // var dupNode = node.cloneNode([deep]);
        // node = The node to be cloned.
        // dupNode = The duplicated node that will be a clone of node
        // deep (Optional) = true if the children of the node should also be cloned, or false to clone only the specified node.
    });

    


})