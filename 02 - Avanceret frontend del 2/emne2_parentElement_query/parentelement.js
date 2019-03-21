document.addEventListener('DOMContentLoaded', () => {

    let itemElementsArray = document.querySelectorAll(".item");

    itemElementsArray.forEach(itemElement => {
        itemElement.addEventListener('click', function(event){
            event.stopPropagation();
            // console.log(event);
            let itemTitle = itemElement.querySelector(".item__title");
            if(event.target == itemTitle){
                itemTitle.innerHTML += "x";
            }
        });
    });

});