const burgerMenu = document.getElementById("burgerMenu");
const mainMenu = document.getElementById("menu");
const mainOption = document.querySelectorAll(".option");
const subMenu = document.querySelectorAll(".subMenu");
const imgOptions = document.querySelectorAll(".imageMenu");

const mainMenuFunction=()=>{
  if(mainMenu.classList.contains("visibleMenu")){
    mainMenu.classList.remove("visibleMenu");
  }else{
    mainMenu.classList.add("visibleMenu");
  }
}


const menuImgFunction=()=>{
  if (mainMenu.classList.contains("visibleMenu")) {
    burgerMenu.src = "src/images/icon-close.svg";
  } else {
    burgerMenu.src = "src/images/icon-hamburger.svg";
  }
}

const subMenuFunction = () => {
  
  for (let i = 0; i < mainOption.length; i++) {
    mainOption[i].addEventListener("click", () => {
    
        subMenu[i].classList.toggle("visibleSubmenu");
        if(subMenu[i].classList.contains("visibleSubmenu")) {

          imgOptions[i].classList.add("rotate");
        }else{
          imgOptions[i].classList.remove("rotate");
        }
      
   

      
      
    });
  }
};

const subMenuFunctionDesktop = ()=>{
  for (let i = 0; i < mainOption.length; i++) {
    mainOption[i].addEventListener("click", () => {
        subMenu[i].classList.toggle("visibleSubmenuDesktop");
        if( subMenu[i].classList.contains("visibleSubmenuDesktop")){
          imgOptions[i].classList.add("rotate"); 
        }else{
          imgOptions[i].classList.remove("rotate"); 
        }
         

    });
  
}}


  burgerMenu.addEventListener("click", () => {
    mainMenuFunction();
    subMenuFunction();
    menuImgFunction();
  });
  



  subMenuFunctionDesktop();




  
















