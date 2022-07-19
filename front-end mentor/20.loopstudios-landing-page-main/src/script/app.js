
const nav = document.querySelector(".barHeader");
const bar = document.querySelector(".bar")
const menuIcon = document.querySelector(".burgerMenu")

const visible = ()=>{
    menuIcon.addEventListener('click', ()=>{
        nav.classList.toggle("barVisible")
        bar.classList.toggle("visible");
        if(bar.classList.contains("visible"))
            menuIcon.src="src/images/icon-close.svg"
        else
         menuIcon.src="src/images/icon-hamburger.svg"
})

}

visible();