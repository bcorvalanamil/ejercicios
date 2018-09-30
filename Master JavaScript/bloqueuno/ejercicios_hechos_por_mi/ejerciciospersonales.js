'use strict'

/* Ejercicio uno :

Hacer un progrma, que te pida introducir dos numeros y que te diga cual de los dos numeros es mayor, menor o si son 
iguales */

var primernumero = parseInt(prompt("introduce el primer numero",0));

    while(primernumero <= 0 || isNaN(primernumero)){

        var primernumero = parseInt(prompt("Introduce un primer numero correcto",0));

    }

var segundonumero = parseInt(prompt("Introduce el segundo numero",0));


    while(segundonumero <= 0 || isNaN(segundonumero)){

    var segundonumero = parseInt(prompt("Introduce un segundo numero correcto",0));

    }

if(primernumero == segundonumero){
    console.log("Son iguales");
} else if(primernumero < segundonumero){
    console.log(segundonumero + " es mayor "+primernumero);

}else{
    console.log(primernumero + " es mayor que " + segundonumero);
}