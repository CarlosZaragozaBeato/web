
const btn = document.getElementById('btn');
const modal = document.getElementById('modal');
const x = document.getElementById('x');
const main = document.getElementById("main");

btn.onclick = () =>{
    modal.classList.add('modalVisible');
    main.classList.add('bg');
}

x.onclick = () =>{
    modal.classList.remove('modalVisible');
    main.classList.remove('bg');
}
