

/*const elemento =document.querySelector("#element");
const output = document.querySelector(".output");

const enviar = document.querySelector(".enviar");

const doble =()=>{
    enviar.addEventListener("click",()=>{
        output.textContent = element.value*2;
    })

}

doble();*/


/*const marca = document.querySelector("#marca"); const modelo = document.querySelector("#modelo");
const output = document.querySelector(".output");


const enviar = document.querySelector(".enviar");

const rebaja = () => {
    enviar.addEventListener("click", () => {


if(marca.value=== "ford" || marca.value=== "Ford"){
        if (modelo.value === "fiesta" || modelo.value === "Fiesta" ) {
            output.textContent = "Tienes un 5% de Rebaja";
        }

        else if (modelo.value === "focus" || modelo.value === "Focus" ) {
            output.textContent = "Tienes un 10% de Rebaja";
        }

    }else{
        output.textContent = "No tienes descuento";
    }
    })

}
rebaja();

const enviar = document.querySelector(".enviar");
const output = document.querySelector(".output");
const mas = document.querySelector(".mas");
const menos = document.querySelector(".menos")
let contador =0;
const botonMas = () => {
    mas.addEventListener("click", () => {


        contador++;
        
        output.textContent =contador;


    })
}

const botonMenos = () => {
    menos.addEventListener("click", () => {


        contador--;
        
        output.textContent =contador;



    })
}


botonMenos();
botonMas();
*/
/*

const operador1 =document.querySelector("#op1");
const operador2 =document.querySelector("#op2");

let op1 = operador1.value;
let op2 = operador2.value;

const output = document.querySelector(".output");

const sumar = document.querySelector(".suma");
const restar = document.querySelector(".resta");
const multiplicar = document.querySelector(".multiplicar");
const elevar = document.querySelector(".elevar");

let total=0;

function sumaOp (op1,op2){
  
    sumar.addEventListener("click", () => {

        total= op1+op2;

       
        return total;
    })

}
function restarOp (op1,op2){
  
    restar.addEventListener("click", () => {

        total= op1-op2;
        

       
        return total;
    })

}



function multiplicarOp (op1,op2){
  
    multiplicar.addEventListener("click", () => {

    total = op1*op2;
        
    
       
        return total;
    })
}

function elevarOp (op1,op2){
  
    elevar.addEventListener("click", () => {

         total = Math.pow(op1, op2)
        
        
       
        return total;
    })
}



sumaOp(op1,op2);
output.textContent =total;*/



