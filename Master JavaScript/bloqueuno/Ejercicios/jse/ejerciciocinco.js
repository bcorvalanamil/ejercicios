'use strict'

// Mostrar todos los numeros divisores de un numero, introducido en un promt 

var numero = parseInt(prompt("Mete un numero ",1));

// for nos permite recorre, vamos a ir desde el numero 1 hasta el numero introducido al teclado

for(var i = 1; i <= numero; i++){
	if(numero%i == 0 ){
		console.log("Divisor:"+i)
	}
	
}