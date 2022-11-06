


//1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
    /*const mayorEdad = ()=>{
    let edad = prompt("Introduzca su edad:");

    if(edad>=18)
        alert("tiene edad suficiente para conducir.")
    else{
        alert("tiene edad suficiente para conducir.")
    }    
    console.log(edad)
}*/


/*
2. Pide una nota (número). Muestra la calificación según la nota:
a. 0-3: Muy deficiente
b. 3-5: Insuficiente
c. 5-6: Suficiente
d. 6-7: Bien
e. 7-9: Notable
f. 9-10: Sobresaliente
*/
 /*const notas = ()=>{
    let nota  = prompt("Introduce tu nota");
    let comentario=null;
    parseInt(nota)

    if(nota ==0||nota==1||nota ==2||nota==3)
        comentario = "Muy deficiente"
    else if(nota ==4)
        comentario = "Insuficiente"
    else if(nota==5)
        comentario="Suficiente"
    else if(nota==6)
        comentario = "Bien"
    else if(nota==7||nota==8)
        comentario="Notable"
    else if(nota==10)
        comentario="Sobresaliente"
    else
        comentario ="Nota no valida"

    return comentario    
    }



alert(notas())
*/




/*
3. Realiza un script que pida cadenas de texto hasta que se pulse
“cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas
concatenadas con un guión -.*/

/*const cadenasNext = ()=>{

    let cadena="1";
    let total="";

    while(cadena!=null){
        cadena = prompt("Introduce una cadena");
        if(cadena===null){
            total +="."
        }else if(cadena!==null){
            total +=cadena+"-";
        }
        
        
    }
    return total;
}

    console.log(cadenasNext());
*/


/*
4. Realiza un script que pida números hasta que se pulse “cancelar”. Si
no es un número deberá indicarse con un «alert» y seguir pidiendo. Al
salir con “cancelar” deberá indicarse la suma total de los números
introducidos.
5. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666
*/

/*const pedirNumeros = ()=>{
   
    let numeros=1;
    let total=null;
    while(numeros!=null){
        numeros = prompt("Introduce un número: ");
        if(isNaN(parseInt(numeros))){
            alert(numeros+" no es un numero");

        }else{
            
            total +=parseInt(numeros); 
        }
    }
    return total
}

console.log(pedirNumeros())*/




/*6. Haz un script que escriba una pirámide inversa de los números del 1
al número que indique el usuario de la siguiente forma : (suponiendo
que indica 30).
3030303030303030303030303030303030303030303030303030303030
30
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

/*const piramideInvertida=()=>{

    let max=parseInt(prompt("introduce un número máximo:"));
    let num = parseInt(max);
        
    for (let i =max; i>=0; i--) {
            document.write("<br>");
            for (let j = 0; j < i; j++) {
                document.write(num);             
            }
            num--;
            }
        }
    piramideInvertida();
    */


/*
7. Crea un script para generar la pirámide siguiente con los números del
1 al que indique el usuario (no mayor de 50):
1
12
123
1234
12345
123456
*/

/*const piramide=()=>{

    let max=parseInt(prompt("introduce un número máximo:"));
    let num = 0;
     
    for (let i =0; i<=max; i++) {
            document.write("<br>");
            for (let j = 0; j < i; j++) {
                
                document.write(num+=1);             
            }
            num=0;
        }
        }
    piramide();
    */




    /*
8. Un script que escriba los números del 1 al 500, que indique cuales
son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea
horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/


/*const multiplos = ()=>{

    for(let i =1; i<=500;i++){


        if(i%4==0){
            document.write(i+ " (Múltiplo de 4)")
            document.write("<br>");
        }else if(i%9==0){
            document.write(i+ " (Múltiplo de 9)")
            document.write("<br>");
        }else if(i%5==0){
            document.write(i)
            document.write("<br>");
            document.write("----------------------");
            document.write("<br>");
        }else{
            document.write(i)
            document.write("<br>");

        }
     
        

    }

}
multiplos();
*/




/*
9. Realiza un script que pida número de filas y columnas y escriba una
tabla. Dentro cada una de las celdas deberá escribirse un número
consecutivo en orden descendente. Si, por ejemplo, la tabla es de
7×5 los números irán del 35 al 1.
*/

/*const tabla=()=>{

    let rows=parseInt(prompt("Introduzca el número de filas:"));
    let columns=parseInt(prompt("Introduzca el número de columnas:"));

    let total=rows*columns;

     for (let i =0; i<=columns; i++) {
        
        for (let j = 1; j < rows; j++) {
            
            document.write(total--+" ");             
        }
        document.write("<br>")
 
    }

}
tabla();
*/




/*
10.Realiza un script que pida por teclado 3 edades y 3 nombres e
indique el nombre del mayor.
*/

/*const edades = ()=>{

    let nombre=[];
    let edades=[];


    for(let i=0;i<3;i++){
        nombre[i]= prompt("Introduzca su nombre: ");
        edades[i]= parseInt(prompt("introduzca su edad: "));

        if(edades[0]> edades[1]&&edades[1]>edades[2]){
            alert("Nombre: "+nombre[0]+ ", Edad: "+edades[0]);
        }else if(edades[1]> edades[0]&&edades[0]>edades[2]){
            alert("Nombre: "+nombre[1]+ ", Edad: "+edades[1]);
        }if(edades[2]> edades[1]&&edades[1]>edades[0]){
            alert("Nombre: "+nombre[2]+ ", Edad: "+edades[2]);
        }
    }
}

edades();
*/



/*
11.Realiza un script que genere un número aleatorio entre 1 y 99.
*/

/*const numeroRandom = ()=>{
   
   return Math.floor(Math.random()*100)+1;

}
alert(numeroRandom())*/


/*
12.Genera 3 números aleatorios entre 1 y 99 pero que no se repita
ninguno.
*/
/*const numerosRandomDiferentes = ()=>{

    let num1=Math.floor(Math.random()*100)+1;;
    let num2=Math.floor(Math.random()*100)+1;;
    let num3=Math.floor(Math.random()*100)+1;;
    let condition=true;
        
    while(condition){
            if(num1!=num2 && num1!=num3 && num2!=num3){
                condition = false;
            }else{
                num1=Math.floor(Math.random()*100)+1;;
                num2=Math.floor(Math.random()*100)+1;;
                num3=Math.floor(Math.random()*100)+1;;
    }
}
        alert(num1+", "+num2+", "+num3)
}
numerosRandomDiferentes();
*/



/*
13.Realiza un script que imprima 14 resultados aleatorios de una
quiniela 1 X 2.
*/
/*const quiniela = ()=>{
    for (let i =0; i<=14; i++) {
        
        for (let j = 1; j < 2; j++) {
            
            document.write(Math.floor(Math.random()*100)+" x "+Math.floor(Math.random()*100));             
        }
        document.write("<br>")
        document.write("<br>")
    
    }
}

quiniela();
*/
/*
14.Realiza un script que pida un texto y lo muestre en mayúsculas.
*/

/*const toMayus = () =>{
    let text=prompt("Introduzca texto: ");

    alert(text.toUpperCase());

}
toMayus();
*/

/*
15.Realiza un script que pida una cadena de texto y la muestre poniendo
el signo – entre cada carácter sin usar el método replace. Por
ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.ç
*/

/*const cadenaGuion = ()=>{

    let cadena = prompt("introduzca una cadena de texto: ");
    let cadenaTotal="";
    for(let i=0; i<cadena.length; i++){
        
            if(i+1===cadena.length){
                cadenaTotal+=cadena.substring(i,i+1)+".";
            }else{
                cadenaTotal+=cadena.substring(i,i+1)+"-";
            }
            
      
    }
    alert(cadenaTotal)
}
cadenaGuion();
*/


/*
16.Realiza un script que cuente el número de vocales que tiene un texto.
*/

/*const contarVocales = ()=>{
    let vocales=0;
    let texto = prompt("Introduzca un texto");

    for(let i = 0;i<texto.length;i++){

        if(texto.substring(i,i+1)==="a"||texto.substring(i,i+1)==="e"||texto.substring(i,i+1)==="i"||texto.substring(i,i+1)==="o"||texto.substring(i,i+1)==="u"){

            vocales++;
        }
    }
    alert(vocales)
}
contarVocales();
*/



/*
17.Pedimos una cadena de texto que sabemos que puede contener
paréntesis. Realiza un script que extraiga la cadena que se encuentra
entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal”
se mostrará “que”. Si no existe el signo “(“ mostrará una cadena
vacía y si existe el signo “(“pero no el signo “)” mostrará desde el
primer paréntesis hasta el final.
*/

/*let cadenaParentesis = ()=>{

    let cadena = prompt("Introduzca una cadena: ");
    let cadenaParentesis="";
    let num1=0;
    let num2=0;

    for(let i=0; i<cadena.length; i++){
        if(cadena.substring(i,i+1)==='('){
            num1=i;
        }else if((cadena.substring(i,i+1)===')')){
            num2=i;
        }

        if(num2>0) {
            cadenaParentesis = cadena.substring(num1,num2+1);
        }else if(num2==0){
            cadenaParentesis = cadena.substring(num1, cadena.length);
        }
    }
    alert(cadenaParentesis);
}


cadenaParentesis();
*/

/*
18.Realiza un script que pida una cadena de texto y la devuelva al revés.
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

/*const alReves = ()=>{
    let cadena = prompt("Introduzca una cadena: ");
    let newCadena="";
    for(let i =cadena.length; i>0;i--){

        newCadena += cadena.substring(i,i-1);

    }
    alert(newCadena);
}

alReves();
*/
/*
19.Realiza un script que pida un texto e indique si es un palíndromo.
Ejemplo de palíndromo: “Dabale arroz a la zorra el abad”.
*/


/*const palindromo = ()=>{

    let cadena  = prompt("Introduzca una cadena: ");

     let cadenaRever = cadena.split("").reverse().join("");

     cadenaRever === cadena ?    alert(cadenaRever) : alert("no");
  }

    
 


palindromo();
*/

/*
20.Realiza un script que muestre la posición de la primera vocal de un
texto introducido por teclado.
*/

/*const primeraVocal =()=>{
    let vocales=0;
    let texto = prompt("Introduzca un texto");
    let i=0;
    while(vocales===0){

        if(texto.substring(i,i+1)==="a"||texto.substring(i,i+1)==="e"||texto.substring(i,i+1)==="i"||texto.substring(i,i+1)==="o"||texto.substring(i,i+1)==="u"){

            vocales=i+1;
           
        }
        i++;
    }
    alert(vocales)
}
primeraVocal()
*/
/*
21.Realiza un script que muestre la serie de fibonacci hasta un número
entre 1 y 100 pedido por teclado. */

/*const fibonnaci = ()=>{
    let numero = Number(prompt("Introduce un número entre 1 y 100"));
    if((numero >= 1) && (numero <= 100)) {
        let x = 0;
        let y = 1;
        let z = null;
       
        document.write(x + "<br>");
    
        for (i = 0; i < (numero-1); i++) {
            z = x + y;
            document.write(z + "<br>");
            y = x;
            x = z;
        }
    }
    else {
        alert("Número erróneo");
    }


    
}
fibonnaci()
*/