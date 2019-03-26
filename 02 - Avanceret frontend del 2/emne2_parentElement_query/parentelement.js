document.addEventListener('DOMContentLoaded', () => {

    // øvesle: queryselect i parentelement.
        
    let parentElementsArray = document.querySelectorAll(".item");

    // for hvert item i array, tilføj click-event
    parentElementsArray.forEach(itemElement => {
        itemElement.addEventListener('click', function(event){
            event.stopPropagation();
            // console.log(event);
            // her er et eksempel på query i uspecifikt parentElement
            // jeg vil gerne have fat i et bestemt child-element
            let childElementTitle = itemElement.querySelector(".item__title");

            // her forudsætter jeg at eventets target er et specifikt tag.
            // conditional så X-et ikke påvirkes af eventbubling fra parentelement,
            // når der clickes på andre div´er i parentelement
            if(event.target == childElementTitle) {
                // her tilføjes et x til tagget, for hvert click
                childElementTitle.innerHTML += "x";
            }
        });
    });

});