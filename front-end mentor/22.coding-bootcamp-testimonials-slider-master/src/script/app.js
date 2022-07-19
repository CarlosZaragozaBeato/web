
const infoPerson = [

    {
        name:"John Tarkpor",
        info:"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",     
        img:"src/images/image-john.jpg",
        rol:"Junior Fron-end Developer"
    },
    {
        name:"Tanya Sinclair",
        info:"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",     
        img:"src/images/image-tanya.jpg",
        rol:"UX Engineer"
    }

];

    const right = document.querySelector(".next");
    const left = document.querySelector(".prev");
    const image = document.querySelector(".profileImg");
    const nombre = document.querySelector(".name");
    const rol = document.querySelector(".rol");
    const info = document.querySelector(".text")
    let contador = 0;

    const next = ()=>{
        right.addEventListener('click',()=>{
            if(contador>=infoPerson.length-1){
                contador=0;
            }else if(contador<infoPerson.length){
                contador++;
            }
             image.src=infoPerson[contador].img;
             rol.textContent=infoPerson[contador].rol;
             nombre.textContent=infoPerson[contador].name;
             info.textContent=infoPerson[contador].info;
        })
    }

    const prev =()=>{
        left.addEventListener('click',()=>{
            if(contador>0){
                contador--;
            }else if(contador===0){
                contador=infoPerson.length;
                contador--;
            }

            image.src=infoPerson[contador].img;
            rol.textContent=infoPerson[contador].rol;
            info.textContent=infoPerson[contador].info;
            nombre.textContent=infoPerson[contador].name;

        })
    }


    next();
    prev();
