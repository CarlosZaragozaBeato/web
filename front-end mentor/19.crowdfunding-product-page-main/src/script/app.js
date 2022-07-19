
const burguerMenu = document.getElementById("burguer");
const menu = document.getElementById("bar");
const body = document.querySelector("body");
const svgCircle = document.querySelector(".circleSvg");
const svgPath = document.querySelector(".pathSvg");
const bookmark = document.querySelector(".bookmark");
const marked = document.getElementById("marked");
const buttonModal = document.querySelectorAll(".modalButton");
const modal = document.querySelector(".modal");
const radio = document.querySelectorAll(".modalSelection");
const close = document.querySelector(".closeModal");
const imgHeader = document.querySelector(".header");
const firstSection = document.querySelector(".firstSection");
const thirdSection = document.querySelector(".thirdSection");
const secondSection = document.querySelector(".secondSection");
const footerModal = document.querySelectorAll(".secondPartModal");
const check = document.querySelectorAll(".modalSelection");
const complete = document.querySelectorAll(".continue");
const finalBtn = document.querySelector(".finalBtn");
const success = document.querySelector(".success");
const data = document.querySelector(".data")
const container = document.querySelector(".container");
const modalArticle = document.querySelectorAll(".modalArticle");
const openMenu = ()=>{

    burguerMenu.addEventListener('click', () =>{
        menu.classList.toggle("visible");
      
      
        if(menu.classList.contains("visible")){
            burguer.src="src/images/icon-close-menu.svg";
            
            
        }else{
            burguer.src="src/images/icon-hamburger.svg";
        }
      

    });
}

const clickBookmark = () =>{

    bookmark.addEventListener('click', () =>{

    marked.classList.toggle("markedVisible");
    svgPath.classList.toggle("pathSvgWhite");
    svgCircle.classList.toggle("circleSvgCyan");


    

    });
}

const openModal = () =>{

    for(let i=0; i<buttonModal.length;i++){
        buttonModal[i].addEventListener('click', ()=>{
            
         
            switch(i){
                case 0:
                    modal.classList.add("visibleModal");
               

                break;

                case 1:
                    modal.classList.add("visibleModal");
                    radio[i].checked =true;
                     
                    
                break;

                case 2:
                    modal.classList.add("visibleModal");
                    radio[i].checked =true;  
                       
                break;
                case 3:
                        modal.classList.add("visibleModal");
                        radio[i].checked =true;  
                break;
            }      
           
           imgHeader.classList.add("gradientImg");
         
            data.style.backgroundColor ="rgba(0, 0, 0, 0.01)"
            container.style.backgroundColor ="rgba(0, 0, 0, 0.05)"
            body.style.backgroundColor ="rgba(0, 0, 0, 0.5)"
      
        })

    }


}
const closeModal = () =>{
    close.addEventListener('click',()=>{
        modal.classList.remove("visibleModal");
        body.classList.remove("gradient");
        data.style.backgroundColor =""
        container.style.backgroundColor =""
        body.style.backgroundColor =""
    })
}
const continueModal = ()=>{
    for(let i=0; i<check.length;i++){
        check[i].addEventListener('change', ()=>{
            
         
            switch(i){
                case 0:
                    
                        
                        footerModal[0].classList.add("visibleFooterModal");
                        footerModal[1].classList.remove("visibleFooterModal");
                        footerModal[2].classList.remove("visibleFooterModal");
                        footerModal[3].classList.remove("visibleFooterModal");
                break;

                case 1:
                  
                        footerModal[1].classList.add("visibleFooterModal");
                        footerModal[2].classList.remove("visibleFooterModal");
                        footerModal[0].classList.remove("visibleFooterModal");
                        footerModal[2].classList.remove("visibleFooterModal");
                
                    
                break;

                case 2:
            
                  
                        footerModal[2].classList.add("visibleFooterModal");
                        footerModal[1].classList.remove("visibleFooterModal");
                        footerModal[0].classList.remove("visibleFooterModal");
                        footerModal[3].classList.remove("visibleFooterModal");
              
                break;
                case 3:
 
                      
                        footerModal[0].classList.remove("visibleFooterModal");
                        footerModal[1].classList.remove("visibleFooterModal");
                        footerModal[2].classList.remove("visibleFooterModal");

                break;
            }   
          
            

        })
}
}

const completeProcess = () =>{
    for(let i =0; i<complete.length;i++){
        complete[i].addEventListener("click", () =>{
            modal.classList.remove("visibleModal");
           
            /*
             body.classList.remove("gradient");
            imgHeader.classList.remove("gradientImg");
            thirdSection.classList.remove("gradient");*/
            success.classList.add("visibleSuccess");
            finalBtn.addEventListener("click", () =>{
                success.classList.remove("visibleSuccess");
                body.classList.remove("gradient");
                imgHeader.classList.remove("gradientImg");
                data.style.backgroundColor =""
                container.style.backgroundColor =""
                
        body.style.backgroundColor =""
            });



        })
    }
  
}
completeProcess();
continueModal();
closeModal();   
openModal();
clickBookmark();
openMenu();
