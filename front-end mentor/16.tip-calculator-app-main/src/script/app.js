const bill = document.getElementById("bill");
const buttons = document.querySelectorAll(".percentage");
const numberOfPeople = document.getElementById("numberOfPeople");
const screen = document.querySelectorAll(".screen");
const button = document.getElementById("button");
const inputs = document.querySelectorAll(".inputContainer");


let number=1;
let total=0;
let percentage=0;

const  calculateTip = ()=>{
    
      for(let i =0; i<buttons.length;i++){
  
        buttons[i].onclick= ()=> {
            
            switch(i){
                case 0:
                    percentage = 5;
                break;	
    
                case 1:
                    percentage = 10;
                break;	
    
                case 2:
                    percentage = 15;
                break;	
    
                case 3:
                    percentage = 25;
                break;	
    
                case 4:
                    percentage = 50;
                break;	
                case 5:
                        percentage = buttons[i].value;
                       break;

            }
         

          
           screen[0].value = Math.floor(bill.value*(percentage/100));
           
        }
        
    }

}
const calculateTotal= ()=>{
    numberOfPeople.addEventListener("change",()=>{
     
         
        
         
       
            

            if(screen[0].value===0){

            }else{
                if(numberOfPeople.value==="0"){
                    number=1;
                }else{
                    number =  numberOfPeople.value;
                }
                total=((parseInt(bill.value))+(parseInt(screen[0].value)))
                total = total/number;
                screen[1].value=Math.floor(total);
            }             
    })
}

calculateTip();
calculateTotal();   
