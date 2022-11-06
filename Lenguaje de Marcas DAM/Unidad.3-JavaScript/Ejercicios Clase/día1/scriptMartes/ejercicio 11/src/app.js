
/*
	// Numero de enlaces de la pagina

	// Direccion del penultimo enlace

	// Numero de enlaces que apuntan a http://prueba

	// Numero de enlaces del tercer p�rrafo*/ 


    let numeroEnlaces = document.querySelectorAll("a");
   
    let penultimoEnlace = (numeroEnlaces.length)-2; 
    
    let numero3=0;
    
    let parrafos = document.querySelectorAll("p");
    let parrafo3 = parrafos[2];
    let enlaces = parrafo3.querySelectorAll("a");


    


    for(let i=0;i<numeroEnlaces.length;i++){
        if(numeroEnlaces[i].href=="http://prueba/"){
            numero3++;
        }
    } 





    console.log(numeroEnlaces.length)
    console.log(numeroEnlaces[penultimoEnlace].href);
    console.log(numero3)
    console.log(enlaces.length)
