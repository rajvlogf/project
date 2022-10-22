let textarea = document.querySelector("#textarea");

let totalCharacter = document.querySelector(".total-character");
let remainingCharacter = document.querySelector(".remaining-character");




textarea.addEventListener("keyup", ()=>{
    updateCharacter();

});

updateCharacter();


function updateCharacter(){
    let total = textarea.value.length;
    totalCharacter.innerText = total;
    let reamaine = textarea.getAttribute("maxlength");
    remainingCharacter.innerText = reamaine-total;   
}
