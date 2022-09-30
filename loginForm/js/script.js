

function showHide(){
    var password = document.getElementById("password");
    var eyes = document.getElementById("fa-eye-btn");
    
    if((password.value.length) > 0){
        eyes.style.display="block";
        eyes.addEventListener("click", function(){
            if(password.getAttribute("type") === "password"){
                password.setAttribute("type", "text")
                eyes.classList.add("fa-eye");
                eyes.classList.remove("fa-eye-slash");

            }else{
                password.setAttribute("type", "password")
                eyes.classList.remove("fa-eye");
                eyes.classList.add("fa-eye-slash");
            }
        });

    }else{
        eyes.style.display="none";
    }
    
}


