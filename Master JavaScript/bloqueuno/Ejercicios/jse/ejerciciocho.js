'use strict'


/* hacer una calculardora : 
- pida dos numeros por pantalla
-Si metemos uno mal que nos vuelva a pedir 
- que nos muestre en alerta y cosnola  el resultado de sumar / restar/ dividir el resultado de esas dos cifras
*/


var cifrauno= parseInt(prompt("Introduce el primer nunmero",0));
var cifrados = parseInt(prompt("introduce el segundo numero",0));

while(cifrauno < 0 || cifrados < 0 || isNaN(cifrauno) || isNaN(cifrados)){
	cifrauno= parseInt(prompt("Introduce el primer nunmero",0));
	cifrados = parseInt(prompt("introduce el segundo numero",0));

}

var resultado = "La suma es:"+(cifrauno+cifrados)+"<br>"+
				"La resta es:"+(cifrauno-cifrados)+"<br>"+
				"La division es:"+(cifrauno/cifrados)+"<br>"+
				"La multiplicacion es:"+(cifrauno*cifrados)+"<br>";


var resultadodos = "La suma es:"+(cifrauno+cifrados)+"\n"+
				"La resta es:"+(cifrauno-cifrados)+"\n"+
				"La division es:"+(cifrauno/cifrados)+"\n"+
				"La multiplicacion es:"+(cifrauno*cifrados)+"\n";

document.write(resultado);
alert(resultadodos);

// Para hacer un salto de linea en cualquier conosola deberia hacer un /n