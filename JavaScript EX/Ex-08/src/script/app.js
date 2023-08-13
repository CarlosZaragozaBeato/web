
const options = document.querySelectorAll(".bar li");
const cards = document.querySelectorAll(".card"); 


const menu = ()=>{
    for(let i=0; i<options.length; i++){
    
        options[i].addEventListener('click',()=>{
            
            for(let j = 0; j < options.length; j++){
                options[j].classList.remove("bgActive");
            }  
            
            if(options[i].classList.contains("all")){
                for(let j = 0; j<cards.length; j++){
                    cards[j].classList.add("visible");
                  
                    options[0].classList.add("bgActive");
                } 
            }else if(options[i].classList.contains("breakfast")){
           
                for(let j = 0; j<cards.length; j++){
                    cards[j].classList.remove("visible");
                    if(cards[j].classList.contains("breakfast")){
                        cards[j].classList.add("visible");
                     
                        options[1].classList.add("bgActive");
                    }
                } 
            }else if(options[i].classList.contains("lunch")){
           
                for(let j = 0; j<cards.length; j++){
                    cards[j].classList.remove("visible");
                    if(cards[j].classList.contains("lunch")){
                        cards[j].classList.add("visible");
                  
                        options[2].classList.add("bgActive");
                    }
                } 
            }else if(options[i].classList.contains("shakes")){
           
                for(let  j= 0; j<cards.length; j++){
                    cards[j].classList.remove("visible");
                  
                    if(cards[j].classList.contains("shakes")){
                        cards[j].classList.add("visible");
                       
                        options[3].classList.add("bgActive");
                    }
                } 
            }

        })

        
        
    }

}

menu();