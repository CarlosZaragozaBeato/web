
const button = document.getElementById('btn');
const background = document.getElementById('section');
const title = document.getElementById('bgContainer');
const text =  document.getElementById('color');
const listItems = document.querySelectorAll('.list-item') ;


const color = function generator(){
    
    let r = Math.floor(Math.random()*255);  
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    
    return "rgb("+r+","+ g+ ","+b+")";
}






listItems[0].addEventListener('click',function(){

    background.style.backgroundColor = color();
    text.innerHTML = window.getComputedStyle(background).backgroundColor;
    text.style.color = window.getComputedStyle(background).backgroundColor;
    text.style.textTransform ="uppercase"
    title.style.display="block";


});

