function validate(){
    var form= document.getElementById("form");
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var text= document.getElementById("text");
    var text2= document.getElementById("text2");

    var emailPattern = /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
     var passPattern = /^[a-zA-Z0-9@]*$/



    
    if(email.match(emailPattern)){
        text.innerHTML = "";
    }else{
        text.innerHTML = "Inalid Email";
    }

    if(password.match(passPattern)){
        text2.innerHTML = "";
    }else{
        text2.innerHTML = "Inalid password";
    }
   
    
}
