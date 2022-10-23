let inputValue = document.querySelector("#input-item");
let todolistitem = document.querySelector(".todolist-item");
let todolist = document.querySelector(".todolist");

let error = document.querySelector(".error");

let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{

    
    if(inputValue.value === ""){
        error.innerText = "please enter text in below text box";
        inputValue.style.border="2px solid red";
    }else{
        let li = document.createElement("li");
        li.setAttribute("class", "item");
        li.setAttribute("title", "Double Click on each Item and remove from here..");
        li.innerText = inputValue.value;
        todolistitem.appendChild(li);
        inputValue.style.border="none";
        inputValue.value = "";
        error.innerText = "";
        li.addEventListener("dblclick", function(){
            li.classList.add("remove");
        });
        
    }
  
});


