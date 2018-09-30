'use strict'

/* hacer un progrma si un numero es par o impar

1. tiene que tener ventanta promt 
2. si no es valido que nos vuelva a pedir el numero
3. que nos muestre si es par o impar

*/ 

var numero = parseInt(prompt('introduce un numero',0));

while(isNaN(numero)){

	var numero = parseInt(prompt('introduce un numero',0));


} 

if (numero % 2 == 0){
	alert("Es un numero par");
}else {
	alert("es un numero impar");
}