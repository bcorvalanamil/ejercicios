'use strict'
alert("hola");

/*
Introducir un bucle, mostrar la suma y la media de los numeros introducidos hasta introducios hasta introducir un numero negativo y ahi mostrar el resultado. 


*/

var suma = 0;
var contador = 0;
//do while que ejecuta un bloque de codigo antes de evaluar la condicon 
// prompt nos podie introducir un dato, recordar que el pront levanta strings entonces si voy a trabajar con numeros voy  a tener que hacer parseInt(prompt ("") ); de esta manera lo covierte en un entero


do{
	var numero = parseInt(prompt('introduce un numero hasta que metas uno negativo',0));
	if(isNaN(numero)){
		numero = 0;

	}else if(numero >= 0){
		suma = suma + numero;  // aca lo que estas diciendo es que la var suma es igual a la variable numero
		contador++; //  ++ sumarle uno al contador y ver iteraciones que esta haciendo el blucle y lugo pode sacar la media. La media = el resultado de la suma entre el numero de intentos ( elementos que se van  sumando )
	}

	console.log(suma);
	console.log(contador);

}while(numero >= 0)

alert("la suma de todos los nuermos es:"+ suma);
alert("la media de todos los nuemero es:"+ (suma/contador));