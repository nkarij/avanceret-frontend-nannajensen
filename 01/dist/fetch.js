

fetch("data/gallery.json")
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((data)=>{
    // console.log(data);
    let dataFromArray = data;

    let containerElement = document.querySelector(".gallery-container");

    for(i in dataFromArray){
        // returns value:
        console.log(dataFromArray[i]);

        // version 2

        let figureElement = createElement("figure", "galleryimage-wrap", containerElement);
        let imageElement = createElement("img", "galleryimage", figureElement);
        imageElement.src = dataFromArray[i];
 
        function createElement(tag, klasse, parentElement){
            let childElement = document.createElement(tag);
            childElement.classList.add(klasse);
            parentElement.appendChild(childElement);
            return childElement;
        };
    };
        
        // VERSION 1
        // let figureElement = document.createElement("figure");
        // figureElement.classList.add("galleryimage-wrap");
        // container.appendChild(figureElement);
        
        // let imageElement = document.createElement("img");
        // imageElement.classList.add("galleryimage");
        // figureElement.appendChild(imageElement);
        


    // OLD VERSION (NANNAS)
        // createElement("figure", "galleryimage-wrap", ".gallery-container");
        // createElement("img", "galleryimage", ".galleryimage-wrap" );
        // // let elementVariable = document.createElement("figure");
        // // container.appendChild(elementVariable);


        // function createElement(element, klasse, parentelement){
        //     let elementVariable = document.createElement(element);
        //     elementVariable.classList.add(klasse);
        //     let parent = document.querySelector(parentelement);
        //     parent.appendChild(elementVariable);

        // }

        // insertElementInDom(".galleryimage-wrap", ".gallery-container");
        // insertElementInDom(".galleryimage", ".galleryimage-wrap");

        // function insertElementInDom(childelement, parentelement){
        //     let child = document.querySelector(childelement);
        //     let parent = document.querySelector(parentelement);
        //     parent.appendChild(child);
        // }
    

});










// gallery.forEach((image, index) => {

    
//     // hvis jeg skal bruge fetch skal det måske mere være noget i retning af:
    
//     Let imageElements = document.querySelectorAll(”.galleryimage);
    
//     imageElements.setAttribute(”src”, ”data.image[index]”); // imageElements[i].src = ’ + data.gallery[index] + ’; // .src burde ikke virke på arrays
    
//     //eller et for in loop:
    
//     For (i in gallery) {
    
//             imageElements[i].setAttribute(”src”, ”data.gallery[i]”);
    
//     }
    
//     let imageTag = document.querySelector(”img”);
    
//     });
