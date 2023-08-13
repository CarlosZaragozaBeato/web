
const menu = document.getElementById("menu");
const x = document.getElementById("x");
const nav =document.getElementById("bar");


menu.onclick = ()=>{
    nav.classList.add("bar-visible")    
}
x.onclick = () =>{
    nav.classList.remove("bar-visible")  
}