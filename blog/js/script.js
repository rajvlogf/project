let lists = document.querySelectorAll(".li");


lists.forEach(list => {
    list.addEventListener("click", function(){
        list.classList.toggle("active");
    });
});