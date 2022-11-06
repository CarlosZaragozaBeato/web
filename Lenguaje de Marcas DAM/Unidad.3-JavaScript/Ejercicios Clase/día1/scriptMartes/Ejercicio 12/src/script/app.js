
const texto = document.querySelector(".main");
const button = document.querySelector("#enlace");
const textAd = document.querySelector(".adicional")
const mostrar =()=>{
    button.addEventListener('click',()=>{

        textAd.classList.toggle("visible");

      


   
        if(textAd.classList.contains("visible")){
            button.textContent="ocultar";
        }else{
            button.textContent="mostrar";
        }
    })
}

mostrar();