

const reviews = [

    {
        id: 01,
        name:"El Musico",
        info:"No hace nada con su vida el tio, se piensa que la musica le va a servir pa algo pero na con suerte acaba en un Burger King q seria el goal más optimista para su vida",     
        dream: "DJ",
        image :"src/images/musico.jpeg"
        
    },
    {
        id: 02,
        name:"El Personaje",
        info:"El tio va de que es un personaje y tal pero todos sabemos que no, y encima ahora viene con dos conjones y hice quieres ser hacker a mos no me jodas",     
        dream: "Ser el sustituto del Sesmesole",
        image :"src/images/blackSuit.jpeg"
    },
    {
        id: 03,
        name:"El Nazi del Trabajo",
        info:"Todos Sabemos que es bipolar y tal de repente te viene el tio con que es aficionado al clash royale como q te lo cambia por el golf, con suerte le da un infarto y se queda en el sitio",     
        dream: "Dar otra espantada",
        image :"src/images/elsuicidas.jpeg"
    },
    {
        id: 04,
        name:"Lorem2",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum qui ipsum quod, dignissimos, sequi similique in voluptate amet inventore labore sit quibusdam, aut natus soluta dolorum ipsa magnam nisi impedit!",     
        dream: "Dar otra espantada",
        image :"src/images/jacker.jpeg"
    },  {
        id: 05,
        name:"Lorem3",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum qui ipsum quod, dignissimos, sequi similique in voluptate amet inventore labore sit quibusdam, aut natus soluta dolorum ipsa magnam nisi impedit!",     
        dream: "Dar otra espantada",
        image :"src/images/torneidou.jpeg"
    }  ,  {
        id: 06,
        name:"Lorem4",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum qui ipsum quod, dignissimos, sequi similique in voluptate amet inventore labore sit quibusdam, aut natus soluta dolorum ipsa magnam nisi impedit!",     
        dream: "Dar otra espantada",
        image :"src/images/musico.jpeg"
    }  ,  {
        id: 07,
        name:"dada",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum qui ipsum quod, dignissimos, sequi similique in voluptate amet inventore labore sit quibusdam, aut natus soluta dolorum ipsa magnam nisi impedit!",     
        dream: "Dar otra espantada",
        image :"src/images/blackSuit2.0.jpeg"
    }       

];

const title = document.querySelector(".name");
const text = document.querySelector(".text");
const name = document.querySelector(".name");
const job = document.querySelector(".rol");
const img = document.querySelector(".image");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
let btn = document.querySelector(".random");
let contador =0;



right.addEventListener("click",  () =>{
    
    if(contador>=reviews.length-1){
        contador=0;
    
    }else if(contador<reviews.length){
        contador++;
    }
    
    title.textContent =(reviews[contador].name);
    job.textContent =(reviews[contador].dream);
    text.textContent=(reviews[contador].info);
    img.src=(reviews[contador].image);

    console.log(contador)
 
    

    
});

left.addEventListener("click", ()=>{

    if(contador>0){
      
        contador--;
    }else if(contador===0){
        contador=reviews.length;
        contador--;
    }
    
    title.textContent =(reviews[contador].name);
    job.textContent =(reviews[contador].dream);
    text.textContent=(reviews[contador].info);
    img.src=(reviews[contador].image);
        console.log(contador)

});

btn.addEventListener("click", ()=>{

    contador = Math.floor(Math.random()*reviews.length)
    title.textContent =(reviews[contador].name);
    job.textContent =(reviews[contador].dream);
    text.textContent=(reviews[contador].info);
    img.src=(reviews[contador].image);
})