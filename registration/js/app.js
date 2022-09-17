
// Personal Details 
let fname = document.getElementById("fname");
let mname = document.getElementById("mname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let dob = document.getElementById("dob");


let fnameError = document.getElementById("fnameError");
let mnameError = document.getElementById("mnameError");
let lnameError = document.getElementById("lnameError");
let emailError = document.getElementById("emailError");
let mobileError = document.getElementById("mobileError");
let dobError = document.getElementById("dobError");





// Academic Qualification variable 
let schoolname = document.getElementById("schoolname");
let board = document.getElementById("board");
let passingyear = document.getElementById("passingyear");
let totalmarks = document.getElementById("tmarks");
let obtainmarks = document.getElementById("omarks");

let schoolnameError = document.getElementById("schoolnameError");
let boardError = document.getElementById("boardError");
let passingyearError = document.getElementById("passingyearError");
let totalmarksError = document.getElementById("tmarksError");
let obtainmarksError = document.getElementById("omarksError");



// Copy Data from present address to permanent address

let chouseno = document.getElementById("chouseno");
let cvillage = document.getElementById("cvillage");
let cpost = document.getElementById("cpost");
let cstate = document.getElementById("cstate");
let cdisttict = document.getElementById("cdisttict");
let cpincode = document.getElementById("cpincode");

// Error veriable of present address

let chousenoError = document.getElementById("chousenoError");
let cvillageError = document.getElementById("cvillageError");
let cpostError = document.getElementById("cpostError");
let cstateError = document.getElementById("cstateError");
let cdisttictError = document.getElementById("cdisttictError");
let cpincodeError = document.getElementById("cpincodeError");



let phouseno = document.getElementById("phouseno");
let pvillage = document.getElementById("pvillage");
let ppost = document.getElementById("ppost");
let pstate = document.getElementById("pstate");
let pdisttict = document.getElementById("pdisttict");
let ppincode = document.getElementById("ppincode");



// Permanent Address Error

let phousenoError = document.getElementById("phousenoError");
let pvillageError = document.getElementById("pvillageError");
let ppostError = document.getElementById("ppostError");
let pstateError = document.getElementById("pstateError");
let pdisttictError = document.getElementById("pdisttictError");
let ppincodeError = document.getElementById("ppincodeError");

let checkbox = document.getElementById("checkbox");



function validationForm(){
    
    if(fname.value === ""){  
        fnameError.innerHTML = "enter first name";
        fname.style.border = "2px solid red";
        return false;
    }else{
        fnameError.innerHTML = "";
        fname.style.border = "2px solid #aaa";
    }

    if(!isNaN(fname.value)){
        fnameError.innerHTML = "enter Character only";
        fname.style.border = "2px solid red";
        return false;
    }
    
    if((fname.value).length < 3){
        fnameError.innerHTML = "Minimum 3 character";
        fname.style.border = "2px solid red";
        return false;
    }
    
    if(mname.value === ""){  
        mnameError.innerHTML = "enter middle name";
        mname.style.border = "2px solid red";
        return false;
    }else{
        mnameError.innerHTML = "";
        mname.style.border = "2px solid #aaa";   
    }
    if(!isNaN(mname.value)){
        mnameError.innerHTML = "enter Character only";
        mname.style.border = "2px solid red";
        return false;
    }
    if(lname.value === ""){  
        lnameError.innerHTML = "enter middle name";
        lname.style.border = "2px solid red";
        return false;
    }else{
        lnameError.innerHTML = "";
        lname.style.border = "2px solid #aaa";   
    }
    if(!isNaN(lname.value)){
        lnameError.innerHTML = "enter Character only";
        lname.style.border = "2px solid red";
        return false;
    }
    if(email.value === ""){  
        emailError.innerHTML = "enter middle name";
        email.style.border = "2px solid red";
        return false;
    }else{
        emailError.innerHTML = "";
        email.style.border = "2px solid #aaa";   
    }
    
    if(email.value === ""){  
        emailError.innerHTML = "enter middle name";
        email.style.border = "2px solid red";
        return false;
    }else{
        emailError.innerHTML = "";
        email.style.border = "2px solid #aaa";   
    }
    
    if(mobile.value === ""){  
        mobileError.innerHTML = "enter middle name";
        mobile.style.border = "2px solid red";
        return false;
    }else{
        mobileError.innerHTML = "";
        mobile.style.border = "2px solid #aaa";   
    }
    if(isNaN(mobile.value)){  
        mobileError.innerHTML = "only didgit allowed";
        mobile.style.border = "2px solid red";
        return false;
    }
    if((mobile.value).length != 10){  
        mobileError.innerHTML = "Mobile Number 10 digit only";
        mobile.style.border = "2px solid red";
        return false;
    }

    if(email.value.indexOf("@") <= 0){
        emailError.innerHTML = "Invalid email address";
        email.style.border = "2px solid red";
        return false;
    }
    if((email.value.charAt(email.value.length-4) != ".") && (email.value.charAt(email.value.length-4) != ".")){
        emailError.innerHTML = "Invalid email address";
        email.style.border = "2px solid red";
        return false;
    }
    if(dob.value === ""){  
        dobError.innerHTML = "select date of birth";
        dob.style.border = "2px solid red";
        return false;
    }else{
        dobError.innerHTML = "";
        dob.style.border = "2px solid #aaa";   
    }

    // Academic Qualification Validation
    if(schoolname.value === ""){
        schoolnameError.innerHTML = "Please enter collage name";
        schoolname.style.border = "2px solid red";
        return false;
    }else{
        schoolnameError.innerHTML = "";
        schoolname.style.border = "2px solid #aaa";
    }

    if(board.value === ""){
        boardError.innerHTML = "Please enter board name";
        board.style.border = "2px solid red";
        return false;
    }else{
        boardError.innerHTML = "";
        board.style.border = "2px solid #aaa";
    }

    if(passingyear.value === ""){
        passingyearError.innerHTML = "Please enter passing year";
        passingyear.style.border = "2px solid red";
        return false;
    }else{
        passingyearError.innerHTML = "";
        passingyear.style.border = "2px solid #aaa";
    }

    if(isNaN(passingyear.value)){
        passingyearError.innerHTML = "passing year digit only";
        passingyear.style.border = "2px solid red";
        return false;
    }

    if(passingyear.value.length != 4){
        passingyearError.innerHTML = "passing year can take 4 digit only";
        passingyear.style.border = "2px solid red";
        return false;
    }

    if(totalmarks.value === ""){
        totalmarksError.innerHTML = "Please enter total marks";
        totalmarks.style.border = "2px solid red";
        return false;
    }else{
        totalmarksError.innerHTML = "";
        totalmarks.style.border = "2px solid #aaa";
    }

    if(isNaN(totalmarks.value)){
        totalmarksError.innerHTML = "total marks digit only";
        totalmarks.style.border = "2px solid red";
        return false;
    }

    if(obtainmarks.value === ""){
        obtainmarksError.innerHTML = "Please enter obtain marks";
        obtainmarks.style.border = "2px solid red";
        return false;
    }else{
        obtainmarksError.innerHTML = "";
        obtainmarks.style.border = "2px solid #aaa";
    }

    if(isNaN(obtainmarks.value)){
        obtainmarksError.innerHTML = "obtain marks digit only";
        obtainmarks.style.border = "2px solid red";
        return false;
    }
    
    // Address Field Validation

    if(chouseno.value == ""){
        chousenoError.innerHTML = "Plase enter house no";
        chouseno.style.border = "2px solid red";
        return false;
    }else{
        chousenoError.innerHTML = "";
        chouseno.style.border = "2px solid #aaa";
    }

    if(cvillage.value == ""){
        cvillageError.innerHTML = "Plase enter village name";
        cvillage.style.border = "2px solid red";
        return false;
    }else{
        cvillageError.innerHTML = "";
        cvillage.style.border = "2px solid #aaa";
    }

    if(cpost.value == ""){
        cpostError.innerHTML = "Plase enter post office";
        cpost.style.border = "2px solid red";
        return false;
    }else{
        cpostError.innerHTML = "";
        cpost.style.border = "2px solid #aaa";
    }

    if(cstate.value == ""){
        cstateError.innerHTML = "Plase enter state";
        cstate.style.border = "2px solid red";
        return false;
    }else{
        cstateError.innerHTML = "";
        cstate.style.border = "2px solid #aaa";
    }

    if(cdisttict.value == ""){
        cdisttictError.innerHTML = "Plase enter disttict";
        cdisttict.style.border = "2px solid red";
        return false;
    }else{
        cdisttictError.innerHTML = "";
        cdisttict.style.border = "2px solid #aaa";
    }

    if(cpincode.value == ""){
        cpincodeError.innerHTML = "Plase enter pincode";
        cpincode.style.border = "2px solid red";
        return false;
    }else{
        cpincodeError.innerHTML = "";
        cpincode.style.border = "2px solid #aaa";
    }

    if(isNaN(cpincode.value)){
        cpincodeError.innerHTML = "Please enter digit only";
        cpincode.style.border = "2px solid red";
        return false;
    }else{
        cpincodeError.innerHTML = "";
        cpincode.style.border = "2px solid #aaa";
    }
    if(cpincode.value.length !=6){
        cpincodeError.innerHTML = "6 digit only";
        cpincode.style.border = "2px solid red";
        return false;
    }else{
        cpincodeError.innerHTML = "";
        cpincode.style.border = "2px solid #aaa";
    }


    // Permanent Address Validation


    if(phouseno.value == ""){
        phousenoError.innerHTML = "Plase enter house no";
        phouseno.style.border = "2px solid red";
        return false;
    }else{
        phousenoError.innerHTML = "";
        phouseno.style.border = "2px solid #aaa";
    }

    if(pvillage.value == ""){
        pvillageError.innerHTML = "Plase enter village name";
        pvillage.style.border = "2px solid red";
        return false;
    }else{
        pvillageError.innerHTML = "";
        pvillage.style.border = "2px solid #aaa";
    }

    if(ppost.value == ""){
        ppostError.innerHTML = "Plase enter post office";
        ppost.style.border = "2px solid red";
        return false;
    }else{
        ppostError.innerHTML = "";
        ppost.style.border = "2px solid #aaa";
    }

    if(pstate.value == ""){
        pstateError.innerHTML = "Plase enter state";
        pstate.style.border = "2px solid red";
        return false;
    }else{
        pstateError.innerHTML = "";
        pstate.style.border = "2px solid #aaa";
    }

    if(pdisttict.value == ""){
        pdisttictError.innerHTML = "Plase enter disttict";
        pdisttict.style.border = "2px solid red";
        return false;
    }else{
        pdisttictError.innerHTML = "";
        pdisttict.style.border = "2px solid #aaa";
    }

    if(ppincode.value == ""){
        ppincodeError.innerHTML = "Plase enter pincode";
        ppincode.style.border = "2px solid red";
        return false;
    }else{
        ppincodeError.innerHTML = "";
        ppincode.style.border = "2px solid #aaa";
    }

    if(isNaN(ppincode.value)){
        ppincodeError.innerHTML = "Please enter digit only";
        ppincode.style.border = "2px solid red";
        return false;
    }else{
        ppincodeError.innerHTML = "";
        ppincode.style.border = "2px solid #aaa";
    }
    if(ppincode.value.length !=6){
        ppincodeError.innerHTML = "6 digit only";
        ppincode.style.border = "2px solid red";
        return false;
    }else{
        ppincodeError.innerHTML = "";
        ppincode.style.border = "2px solid #aaa";
        return false;
    }
}


// Calculation 

let percentage = document.getElementById("percentage");


let sum;

function percent(){
    sum = (parseInt(obtainmarks.value) / parseInt(totalmarks.value))*100;
    percentage.value = sum.toFixed(2)+"%";
}



// Copy Data from present address to permanent address functon

function copyAddress(){
    if(checkbox.checked == true){
        phouseno.value = chouseno.value;
        pvillage.value = cvillage.value;
        ppost.value = cpost.value;
        pstate.value = cstate.value;
        pdisttict.value = cdisttict.value;
        ppincode.value = cpincode.value;
    }else{
        phouseno.value = "";
        pvillage.value = "";
        ppost.value = "";
        pstate.value = "";
        pdisttict.value = "";
        ppincode.value = "";
    }



}

