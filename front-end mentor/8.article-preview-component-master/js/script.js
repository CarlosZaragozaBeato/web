
let info = document.getElementById("info");
let social = document.getElementById("social");
let btn1 = document.getElementById("shareInfo");
let btn2 = document.getElementById("shareSocial");


btn1.addEventListener("click",()=>{

  
    social.classList.toggle("visible");
    info.classList.toggle("remove1");



})
btn2.addEventListener("click",()=>{
 
    social.classList.toggle("visible");
    info.classList.toggle("remove1");
   
})

