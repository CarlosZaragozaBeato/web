
const menu = document.querySelector(".bar");
const burgerMenu = document.querySelector(".burger"); 
const article = document.querySelectorAll(".article");
const button  = document.querySelectorAll(".more");
const colores = ["#1572A1","#7897AB","#219F94","#FFBBBB","#FFD32D","#FF1700","#B983FF","#FF5DA2","#00EAD3","#CF0000","#FCF876","#32E0C4","#7868E6","#B4AEE8","#FF005C","#C7FFD8","#54E346","#00B7C2","#B6EB7A","#FB7813","#7900FF","#1DB9C3","#91C788"];

const showMenu = ()=>{

    burgerMenu.addEventListener('click', ()=>{
        menu.classList.toggle("menuVisible");
        if(menu.classList.contains('menuVisible')){
            burgerMenu.src= "src/images/icons/icon-close.webp";
        }else{
            burgerMenu.src= "src/images/icons/icon-hamburger.webp";
        }
      
    });
}
    const color =()=>{
    
        
    
        return colores[Math.floor(Math.random()*colores.length)];
   
    }
    
    
    const border = () =>{
        for(let i=0;i<article.length;i++){
            let colorg = color();

            article[i].addEventListener('mouseenter',() =>{
              
                    article[i].style.color = colorg;
                    article[i].style.borderColor=colorg;
                    button[i].style.background=colorg;
              
             
            });
            article[i].addEventListener('mouseleave',() =>{
              
                article[i].style.color = "";
                article[i].style.borderColor="";
                button[i].style.background=""
                colorg = color();
         
        });
        }
    }





showMenu();
border();