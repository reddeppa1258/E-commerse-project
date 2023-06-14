  // Opening Contact Form
  function contactMe(){
    document.getElementById("pop-up").style.display="block"
}

// User Name Validation
function userValidation(){

    var ddd = document.getElementById("user").value;
    namevalidation = /^[a-z]{8}$/g;

    if(namevalidation.test(ddd)){
        document.getElementById("user-valid").style.display = "block";
        document.getElementById("user-eoror").style.display = "none";
    }
    else{
        document.getElementById("user-eoror").style.display = "block";
        document.getElementById("user-valid").style.display = "none";

    }
}
// Email Validation
function emailValidation(){

    var ccc = document.getElementById("email").value;
    emailvalidation = /^[6-9][0-9]{9}$/

    if(emailvalidation.test(ccc)){
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-eoror").style.display = "none";
    }
    else{
        document.getElementById("email-eoror").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
    }
}
// Close The Pop-Up Form
function clip(){
    document.getElementById("pop-up").style.display="none"
}
// Sending The Data To Storage
function send(){
    var ddd = document.getElementById("user").value;
    namevalidation = /^[a-zA-Z0-9_ ]{8}$/





    var ccc = document.getElementById("email").value;
    emailvalidation = /^[6-9][0-9]{9}$/

   if(namevalidation.test(ddd) && emailvalidation.test(ccc) ){
        alert("THE DTAE HAS SEND TO BACK-NED")
   }
}


