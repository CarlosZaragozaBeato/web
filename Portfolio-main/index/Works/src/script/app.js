
const image = document.querySelector(".bgImage");
const title = document.querySelector(".titleCarrusel");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const buttonG = document.querySelector(".buttonGo")
let contador =0;


let arrayImages = ["src/images/icons/carrusel/firstWork.webp","src/images/icons/carrusel/secondWork.webp","src/images/icons/carrusel/thirdWork.webp","src/images/icons/carrusel/fourthWork.webp"]
let arrayNombres = ["Primer Proyecto" , "Segundo Proyecto", "Tercer Proyecto","Cuarto Proyecto"];
let arrayLinks = ["https://gbatz2.github.io/project/projects/css%20vanilla/front-end%20mentor/18.blogr-landing-page-main/index.html","https://gbatz2.github.io/project/projects/css%20vanilla/front-end%20mentor/19.crowdfunding-product-page-main/index.html","https://gbatz2.github.io/project/projects/css%20vanilla/front-end%20mentor/20.loopstudios-landing-page-main/index.html","https://gbatz2.github.io/project/projects/css%20vanilla/front-end%20mentor/21.insure-landing-page-master/index.html"];




const audio = document.querySelector(".audio");
const imageS = document.querySelector(".mainimage");

const volumeText = document.querySelector(".volumeText");
const volumeImg = document.querySelector(".iconVolumen")
const duration = document.querySelector(".duracion");
const nextS = document.querySelector(".nextS");
const previousS = document.querySelector(".previousS");
const play = document.querySelector(".play");
const random = document.querySelector(".randomS");
const songTitle = document.querySelector(".songTitle");
const artist = document.querySelector(".artist");
const currentSong = document.querySelector(".currentSong");
const totalSongs = document.querySelector(".totalSongs");

let con =0;
let condition=false;




const canciones = 
["src/audio/Chopin - Etude Op. 25 No. 11 (Winter Wind).mp3",
"src/audio/Liszt - Mazeppa (Transcendental Étude No. 4).mp3"
,"src/audio/Tchaikovsky - Waltz of the Flowers (The Nutcracker Suite).mp3"
,"src/audio/Rebelion ft. Micah Martin - The Edge.mp3",
"src/audio/Brennan Heart & Jonathan Mendelsohn - Imaginary.mp3",
"src/audio/Headhunterz - From Within (Official Audio) (320 kbps).mp3"];

const titles = [
    "Etude Op. 25 No. 11 (Winter Wind)",
    "(Transcendental Étude No. 4)"
    ,"Waltz of the Flowers"
    ,"The Edge",
    "Imaginary",
    "From Within"];

const artists = [
        "Chopin",
        "Mazeppa"
        ,"Tchaikovsky"
        ,"Rebelion ft. Micah Martin",
        "Brennan Heart & Jonathan Mendelsohn",
        "Headhunterz"];


        audio.src = canciones[contador];
        songTitle.textContent =titles[con];
        artist.textContent =artists[con];
        totalSongs.textContent = canciones.length;


        /*Mp3*/ 












function textAppear(){
    let inText = document.querySelectorAll('.appear');
    let screenPosition = window.innerHeight/2;
    
    for(let i=0; i<inText.length; i++){

        let inPosition = inText[i].getBoundingClientRect().top;
      
    
        if(inPosition<screenPosition){
          inText[i].classList.add("text-appear");
        }else{
          inText[i].classList.remove("text-appear");
        }
    }


}


/*Carrusel*/ 
const nextWork = ()=>{

    next.addEventListener('click',()=>{
        image.src = arrayImages[contador]
        title.textContent = arrayNombres[contador]
        buttonG.style.opacity =1;
        buttonG.href = arrayLinks[contador];
        if(contador>=arrayImages.length-1){
            contador=0;
        
        }else if(contador<arrayImages.length){
            contador++;
        }


    })

}


const previousWork = ()=>{

    previous.addEventListener('click',()=>{

        if(contador>0){
      
            contador--;
        }else if(contador===0){
            contador=arrayImages.length;
            contador--;
        }
        image.src = arrayImages[contador]
        title.textContent = arrayNombres[contador]
        buttonG.style.opacity =1;
        buttonG.href = arrayLinks[contador];
    })
  


}




buttonG.style.opacity =0;
nextWork();
previousWork();
window.addEventListener("scroll", textAppear);



const volume = ()=>{

    volumeText.addEventListener("change",()=>{

        
        
        audio.volume =(volumeText.value)/100;
      
        if(volumeText.value==0){
            volumeImg.src="src/images/icons/mp3/mute.webp";
        }else{
            volumeImg.src="src/images/icons/mp3/volume.webp"
        }

    })

}

const nextSong=()=>{
    nextS.addEventListener("click",()=>{
        play.src = "src/images/icons/mp3/play.webp";
        if(con>=canciones.length-1){
            con=0;
        
        }else if(con<canciones.length){
            con++;
        }
        audio.src = canciones[con];
        songTitle.textContent =titles[con];
        artist.textContent =artists[con];
        currentSong.textContent = con+1;
     
     
    
    } )
}
const previousSong=()=>{
    previousS.addEventListener("click",()=>{
        play.src = "src/images/icons/mp3/play.webp";
        if(con>0){
      
            con--;
        }else if(con===0){
            con=canciones.length;
            con--;
        }
        audio.src = canciones[con];
        songTitle.textContent =titles[con];
        artist.textContent =artists[con];
        currentSong.textContent = con+1;
   
      
    
    } )
}

const playSong=()=>{

    play.addEventListener("click",()=>{
 
   
        if(condition){
            audio.pause();
            condition=false;
            play.src = "src/images/icons/mp3/play.webp";
        }else{
            audio.play();
            condition=true;   
            play.src = "src/images/icons/mp3/pause.webp";       
        }
        currentSong.textContent = con+1;



    })    

}

const randomSong = ()=>{
        random.addEventListener("click",()=>{
            con = Math.floor((Math.random()*canciones.length));
            audio.src = canciones[con];
      
            songTitle.textContent =titles[con];
            artist.textContent =artists[con];
            currentSong.textContent = con+1;
            
    
        })
       
      
}
volume();
nextSong();
previousSong();
playSong();

randomSong();