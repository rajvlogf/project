
let scrollToTop = document.querySelector(".angle");
let wrapper = document.getElementById("header");


window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
        scrollToTop.classList.add("active")

    }else{
        scrollToTop.classList.remove("active")
    }
});

scrollToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

