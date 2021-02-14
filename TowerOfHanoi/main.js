let start = null;
// let end = null;
let divIds = ["disk4", "disk3", "disk2", "disk1"]

function makeMove(div_id){
    if(!start) start = div_id;
    else if(start && div_id && start !== div_id) {
        peStart = document.getElementById(start);
        peEnd   = document.getElementById(div_id);
        sChild   = peStart.lastElementChild;
        eChild   = peEnd.lastElementChild;

        if(!eChild) {
            peStart.removeChild(sChild);
            peEnd.appendChild(sChild);
        } else if (divIds.indexOf(sChild.id) < divIds.indexOf(eChild.id)){
            peStart.removeChild(sChild);
            peEnd.appendChild(sChild);
        }

        if(peEnd.id !== "post1"){
            if(peEnd.childElementCount > 3){
                alert("you win");
            }
        }
            start = null;
            // end = null;

    } else {
        alert("Select Different Posts");
        start = null;
        // end = null;
    }
}