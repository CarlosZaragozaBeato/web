
    const mail = document.getElementById("mailError");
    const errorMsg = document.getElementById("error"); 
const btn = document.getElementById("button");


btn.addEventListener("click",  () =>{
    const mail = document.getElementById("mailError");
    const pattern = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  

    if(mail.value.match(pattern)){
        mail.classList.remove("errorBorder");
        errorMsg.classList.remove("errorClass");
    }else{
         mail.classList.add("errorBorder");
         mail.placeholder="example@email.com";
        errorMsg.classList.add("errorClass");
    }


});