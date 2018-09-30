'use strict'
alert("Bucles");

// Bucles  es sinonimo de sinimos / estrcutura de control que se repite 
// bulce FOR 

var numero = 100;

for (var i = 0; i <= numero; i++) {
	console.log(" vamos por el numero"+i);

	//debugger;  no me funciono esto 
}

// var i es el contador, la variable que se va ir actualizando con las vueltas que va a dar el bucle 
// el ultimo elemento es el incremento de incremetador o des
// operador de incremento ++ le suma uno 


// Bucle While = Es indefinido. Va a contar con una condcion y cuando se cumpla esa condición se va a ejecturar un bloque de instrucción infinito


var year = 2018;


while(year <= 2050){
	console.log("funciona el while");
	// En esta caso para que la pagina no se quede colgada hay que poner un operador de incremento
	year++; // de esta manera va para adelante por eso es de aumento 

}





while(year != 1991){
	console.log("menos");
	year--; 
}

// esto sirve para que la pagina decremente

// mientras que year no sea igual a 2019


