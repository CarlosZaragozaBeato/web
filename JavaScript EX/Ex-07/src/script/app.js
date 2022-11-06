
const img= document.querySelectorAll(".img");
const answer= document.querySelectorAll(".answer");
const btn = document.querySelectorAll(".image");


for(let i =0; i<btn.length;i++){
btn[i].onclick = function(){
  answer[i].classList.toggle("visible");

  
  if(answer[i].classList.contains("visible")){
      img[i].src="src/images/substract.png";
      img[i].classList.add("rotate");
      img[i].classList.remove("rotate2");
  }else{
    img[i].src="src/images/mas.png";
    img[i].classList.add("rotate2");
    img[i].classList.remove("rotate");

  }
};   
}