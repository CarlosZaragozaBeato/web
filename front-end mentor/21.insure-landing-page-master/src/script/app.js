
const buttonIcon = document.querySelector(".menuI");
const imgIntro = document.querySelector(".pictureIntro");
const bar = document.querySelector(".bar");

const visible=()=>{
    buttonIcon.addEventListener("click",()=>{
        bar.classList.toggle("barVisible");
        imgIntro.classList.toggle("pictureIntroDisabled");
        
        if(bar.classList.contains("barVisible")){
            buttonIcon.src ="src/images/icon-close.svg";
        }else{
            buttonIcon.src ="src/images/icon-hamburger.svg";
        }
    });
}

visible();