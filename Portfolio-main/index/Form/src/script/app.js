

const image = document.querySelectorAll(".state");
const buttonF = document.querySelector("#boton");
let condition = false;
const formulario = document.querySelector("#formulario");
let inputs = document.querySelectorAll(".input")
const validate = ()=>{
    /*Form Input*/
    let nombre = document.querySelector("#nameText");
    let apellidos = document.querySelector("#surnameText");
    let company = document.querySelector("#companyText");
    let mail = document.querySelector("#mailText");
    let telefono = document.querySelector("#phoneText");





    /*Form Labels*/ 
    let labels = document.querySelectorAll(".label")




    const pattern =
      /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (inputs[0].value==="") {
  
        image[0].src = "src/images/form/no.webp";
        image[0].classList.add("visible");
        
        inputs[0].style.borderColor = "hsl(0, 100%, 74%)";
        inputs[0].style.color = "hsl(0, 100%, 74%)";
        
        labels[0].style.color="hsl(0, 100%, 74%)";
        


      } else {
        image[0].src = "src/images/form/yes.webp";
        image[0].classList.add("visible");
        
        inputs[0].style.borderColor = "";
        inputs[0].style.color="";
        
        labels[0].style.color="";
        
     
      }

      if (inputs[1].value==="") {
  
        image[1].src = "src/images/form/no.webp";
        image[1].classList.add("visible");
        
        inputs[1].style.borderColor = "hsl(0, 100%, 74%)";
        inputs[1].style.color = "hsl(0, 100%, 74%)";
        
        labels[1].style.color="hsl(0, 100%, 74%)";
        
    
    
      } else {
        image[1].src = "src/images/form/yes.webp";
        image[1].classList.add("visible");
       
        inputs[1].style.borderColor = "";
        inputs[1].style.color = "";
       
        labels[1].style.color="";
       
     
      }

      if (inputs[2].value==="") {
  
        image[2].src = "src/images/form/no.webp";
        image[2].classList.add("visible");
        
        inputs[2].style.borderColor = "hsl(0, 100%, 74%)";
        inputs[2].style.color = "hsl(0, 100%, 74%)";
        
        labels[2].style.color="hsl(0, 100%, 74%)";
        
      
    
      } else {
        image[2].src = "src/images/form/yes.webp";
        image[2].classList.add("visible");
        
        inputs[2].style.borderColor = "";
        inputs[2].style.color = "";
        
        labels[2].style.color="";
       
  
      }
   
      image[3].src = "src/images/form/yes.webp";
      image[3].classList.add("visible");

      if (inputs[4].value.match(pattern)) {
  
        image[4].src = "src/images/form/yes.webp";
        image[4].classList.add("visible");
       
        inputs[4].style.borderColor = "";
        inputs[4].style.color = "";
       
        labels[3].style.color="";
       
    
       

      } else {
     
        image[4].src = "src/images/form/no.webp";
        image[4].classList.add("visible");
        
        inputs[4].style.borderColor = "hsl(0, 100%, 74%)";
        inputs[4].style.color = "hsl(0, 100%, 74%)";
        
        labels[3].style.color="hsl(0, 100%, 74%)";
   
      }
      
      if (inputs[5].value==="") {
  
        image[5].src = "src/images/form/no.webp";
        image[5].classList.add("visible");
        inputs[5].style.borderColor = "hsl(0, 100%, 74%)";
        inputs[5].style.color = "hsl(0, 100%, 74%)";
        labels[4].style.color="hsl(0, 100%, 74%)";
      
    
      } else {
        image[5].src = "src/images/form/yes.webp";
        image[5].classList.add("visible");
        inputs[5].style.borderColor = "";
        inputs[5].style.color = "";
        labels[4].style.color="";
   
        
      }
  



    }


const buttonEvent = ()=>{
    
  buttonF.addEventListener("click", ()=>{
        validate();
  
     
    })
}
    buttonEvent();
