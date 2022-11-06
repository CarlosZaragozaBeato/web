

const lista = document.querySelector("#lista");

const button = document.querySelector("#button");

const crear= ()=>{
    button.addEventListener('click',()=>{
       
        let elemento;

        elemento = document.createElement("li");
       
        texto = document.createTextNode("lorem ipsum");
    
        elemento.appendChild(texto);
    
        lista.appendChild(elemento);
        
    })
   
}






crear();   

 
