<<<<<<< HEAD
const reset = document.getElementById("reset") ;
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase") ;
const numberDisplay = document.getElementById("number");
let number = 0;

numberDisplay.innerHTML = number;



reset.addEventListener("click", ()=>{

    number=0;

    numberDisplay.textContent = number;
    numberDisplay.classList.remove("negativeNumber");
    numberDisplay.classList.remove("positiveNumber");
});


increase.addEventListener("click", ()=>{

    number++;

    numberDisplay.textContent = number;

    if(number>0){
        numberDisplay.classList.add("positiveNumber");
        numberDisplay.classList.remove("negativeNumber");
    }else if(number<0){
        numberDisplay.classList.add("negativeNumber");
        numberDisplay.classList.remove("positiveNumber");
    }
});

decrease.addEventListener("click", ()=>{
    number--;

    numberDisplay.textContent = number;

    if(number>0){
        numberDisplay.classList.add("positiveNumber");
        numberDisplay.classList.remove("negativeNumber");
    }else if(number<0){
        numberDisplay.classList.add("negativeNumber");
        numberDisplay.classList.remove("positiveNumber");
    }
});


=======
const reset = document.getElementById("reset") ;
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase") ;
const numberDisplay = document.getElementById("number");
let number = 0;

numberDisplay.innerHTML = number;



reset.addEventListener("click", ()=>{

    number=0;

    numberDisplay.textContent = number;
    numberDisplay.classList.remove("negativeNumber");
    numberDisplay.classList.remove("positiveNumber");
});


increase.addEventListener("click", ()=>{

    number++;

    numberDisplay.textContent = number;

    if(number>0){
        numberDisplay.classList.add("positiveNumber");
        numberDisplay.classList.remove("negativeNumber");
    }else if(number<0){
        numberDisplay.classList.add("negativeNumber");
        numberDisplay.classList.remove("positiveNumber");
    }
});

decrease.addEventListener("click", ()=>{
    number--;

    numberDisplay.textContent = number;

    if(number>0){
        numberDisplay.classList.add("positiveNumber");
        numberDisplay.classList.remove("negativeNumber");
    }else if(number<0){
        numberDisplay.classList.add("negativeNumber");
        numberDisplay.classList.remove("positiveNumber");
    }
});


>>>>>>> ccbc9512efe1abfd38b3464c1f5231d3af64623f
