/* no permite activa funcionalidades nuevas de JS- Hacen que nuestra programación sea estrcicto*/

/*podemos definir una variable con la palabra LET o var*/
/* una variables es un contendor de información */
/*el más sirve para concatenar*/

/*
la difrencia  de alcance que tiene y como actuan con los difrentes bloques 
let= 
var= 

*/


alert("Juan");

var pais ="España";

var cont ="Europa";

pais = "Arge";
cont = "Asia";

var pais_y_cont = pais+' '+cont;


var numero = 40;

console.log(numero); // valor 40

if (true) {
	var numero=50;
	console.log(numero); // valor 50
}

console.log(numero); //valor 50


/// Prueba con Let = variable con un alcance limitado. 

var texto = "curso JS";

console.log(texto);

if (true) {
	let texto = "Curso Tejido"; 
	console.log(texto); // la logica es que cambia el valor de la variable de JS a tejido  
}

console.log(texto);