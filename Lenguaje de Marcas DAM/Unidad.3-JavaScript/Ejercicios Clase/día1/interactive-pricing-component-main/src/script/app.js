const eight= "8.00";
const twelve = "12.00";
const sixteen= "16.00";
const twentyFour="24.00";
const thirtySix = "36.00";

const slider = document.querySelector(".slider");
const check = document.querySelector("#check");
const title = document.querySelector(".views");
const money = document.querySelector(".priceSlider .price");






const change = ()=>{
    slider.addEventListener("input",()=>{
         

        switch(slider.value) {
            case '0': 
            title.textContent ="10K PAGEVIEWS"
            money.textContent = ("$"+eight);
            slider.style.background=   "linear-gradient( 90deg,rgba(165, 243, 235, 1) 0%, rgba(219, 240, 246, 1) 0%, rgba(236, 239, 249, 1) 0%"
              
            break;

            case '1': 
            title.textContent ="50K PAGEVIEWS"
            money.textContent = ("$"+twelve);
            slider.style.background=   "linear-gradient( 90deg,rgba(165, 243, 235, 1) 0%, rgba(219, 240, 246, 1) 30%, rgba(236, 239, 249, 1) 31%"
            break;

            case '2': 
            title.textContent ="100K PAGEVIEWS"
            money.textContent = ("$"+sixteen);
            slider.style.background=   "linear-gradient( 90deg,rgba(165, 243, 235, 1) 0%, rgba(219, 240, 246, 1) 50%, rgba(236, 239, 249, 1) 51%"
            break;

            case '3': 
            title.textContent ="500K PAGEVIEWS"
            money.textContent = ("$"+twentyFour);
            slider.style.background=   "linear-gradient( 90deg,rgba(165, 243, 235, 1) 0%, rgba(219, 240, 246, 1) 70%, rgba(236, 239, 249, 1) 71%"
            break;

            case '4': 
            title.textContent ="1M PAGEVIEWS"
            money.textContent = ("$"+thirtySix);
            slider.style.background=   "linear-gradient( 90deg,rgba(165, 243, 235, 1) 0%, rgba(219, 240, 246, 1) 100%"
            break;

        } 
    })
}

  const discount = ()=>{
    check.addEventListener('change',()=>{
    
      
  
    if(check.checked){ 
        check.style.transform= "translateY(1.5px) translateX(0rem)";
       
    }else{
        check.style.transform= "translateY(1.5px) translateX(1.35rem)";
        
        let mon =  money.innerHTML;
        mon = mon.substring(1, mon.length)
     
        let discount = parseInt(mon)-(parseInt(mon)*0.2);
        money.textContent="$"+discount;
     
    }
    })

  }

discount();
change();