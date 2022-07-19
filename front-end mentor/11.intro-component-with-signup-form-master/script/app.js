const errorImg = document.querySelectorAll(".errorImg");
const errorTxt = document.querySelectorAll(".errorTxt");
const errorBorders = document.querySelectorAll(".boxTxt");
const errorPlaceHolder = document.querySelectorAll(".inputTxt");
const btn = document.getElementById("form");



const validateForm = function validate(){
    const frstName = document.getElementById("firstName").value;
    const lstName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const pswrd = document.getElementById("password").value;
    const pattern =
      /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    /*First Name */
    if (frstName == "") {
  
      errorImg[0].style.display = "block";
      errorTxt[0].style.display = "block";
      errorBorders[0].style.borderColor = "hsl(0, 100%, 74%)";
      errorPlaceHolder[0].style.color="hsl(0, 100%, 74%)";
      
  
    } else {
      errorImg[0].style.display = "none";
      errorTxt[0].style.display = "none";
      errorBorders[0].style.borderColor = "hsl(246, 25%, 77%)";
      errorPlaceHolder[0].style.color="black";
  
      
    }
  
    /*Last Name*/
    if (lstName == "") {
   
      errorImg[1].style.display = "block";
      errorTxt[1].style.display = "block";
      errorBorders[1].style.borderColor = "hsl(0, 100%, 74%)";
      errorPlaceHolder[1].style.color="hsl(0, 100%, 74%)";
      errorPlaceHolder[1].style.color="hsl(0, 100%, 74%)";
  
    } else {
      errorImg[1].style.display = "none";
      errorTxt[1].style.display = "none";
      errorBorders[1].style.borderColor = "hsl(246, 25%, 77%)";
      errorPlaceHolder[1].style.color="black";
      
      
    }
    /*Email*/
    if(email.match(pattern)){
      errorImg[2].style.display = "none";
      errorTxt[2].style.display = "none";
      errorBorders[2].style.borderColor = "hsl(246, 25%, 77%)";
      errorPlaceHolder[2].style.color="black";
    
  
    } else {
  
      errorImg[2].style.display = "block";
      errorTxt[2].style.display = "block";
      errorBorders[2].style.borderColor = "hsl(0, 100%, 74%)";
      errorPlaceHolder[2].style.color="hsl(0, 100%, 74%)";
      errorPlaceHolder[2].placeholder="email@example/com";
      errorPlaceHolder[2].value="";
    }
  
    /*Password*/
    if (pswrd == "") {
    
   
      errorImg[3].style.display = "block";
      errorTxt[3].style.display = "block";
      errorBorders[3].style.borderColor = "hsl(0, 100%, 74%)";
      errorPlaceHolder[3].style.color="hsl(0, 100%, 74%)";
      
  
    } else {
      errorImg[3].style.display = "none";
      errorTxt[3].style.display = "none";
      errorBorders[3].style.borderColor = "hsl(246, 25%, 77%)";
      errorPlaceHolder[3].style.color="black";
  
      
    }
  
    
  

}

btn.addEventListener('submit', function(value){
    value.preventDefault();
    validateForm();
});