'use strict'

alert("hola");
// tabla de multiplicar de un numero introducido por pantalla. 

var numero = parseInt(prompt('¿De que numero quieres la tabla?',1));

for(var i = 1; i <= 10; i++){
	document.write(i+"x"+numero+"="+(i*numero)+"<br>");
}


// Todas las tablas de multiplicar 


for(var c = 1; c <= 15; c++){
	document.write("<h1>Tabla del "+c+"</h1>");
	for(var b = 1; b <=10; b++){
		document.write(i+"x"+c+"="+(i*c)+"<br>");
	}
}