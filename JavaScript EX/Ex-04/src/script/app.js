
const menu = document.querySelector(".image");
const nav = document.querySelector(".bar-section");
const bg = document.querySelector(".nav");
const img = document.querySelector(".img")
menu.addEventListener("click", ()=>{


        
        nav.classList.toggle("bar-visible");
        bg.classList.toggle("background")
        if(nav.classList.contains("bar-visible")){
            img.src="src/images/x.png";
            console.log("22")
        }else if(nav.classList.contains!=("bar-visible")){
            img.src="src/images/menu.png";
            console.log("33")
        }
});

