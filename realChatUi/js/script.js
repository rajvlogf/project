let chatSettings = document.querySelector(".chat-settings");
let checkbox = document.getElementById("checkbox");

var checkbtn = document.getElementById("checkbtn");

console.log(checkbox.checked);

// function showHide() {
//     console.log(checkbox.checked);
// }
checkbtn.addEventListener("click", function(){
    if(checkbox.checked === false){
        chatSettings.style.display="block";
    }else{
        chatSettings.style.display="none";
    }

    console.log(checkbox.checked);
});