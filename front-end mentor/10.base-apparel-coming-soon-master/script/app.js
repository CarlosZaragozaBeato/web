

const email = document.getElementById("email");
const errorText = document.getElementById("errorText");
const errorImg = document.getElementById("errorImg");
const btn = document.getElementById("btn");
const borderRed = document.getElementById("border")
const pattern =
/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




btn.addEventListener("click", function validate(){


    if(email.value.match(pattern)){

        errorText.classList.add("hidden");
        errorImg.classList.add("hidden");
        borderRed.style.border="";
        email.style.color="";
    }else{

        errorText.classList.remove("hidden");
        borderRed.style.border="1px solid hsl(0, 93%, 68%)";
        
        email.style.color="hsl(0, 93%, 68%)";
        errorImg.classList.remove("hidden");
        
    }   

});
