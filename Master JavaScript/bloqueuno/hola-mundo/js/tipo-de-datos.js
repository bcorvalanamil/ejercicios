'use strict'

//OPERADORES 

var uno = 7;
var dos = 12;
var operacion = uno + dos;

alert("Es resultado de la operacion"+operacion);

/* Tipos de datos
Entero 
Sting 
coma flotante o decimal 
buleano (true o false)
array
objetos
*/
/*lo estoy escribiendo como un string y no como numero*/

var numero_falso = "33"; 
console.log(Number(numero_falso)+7);
console.log(parseInt(numero_falso)+7);


var numero_falso_dos = "33.4"; 
console.log(parseInt(numero_falso_dos)+7);

/* Hyay algunas funciones que nos permiten convertir un dato a otro Number(); */

var numero_entero = 44;
var cadena_texto =  'Hola "que"tal';
var verdadero_o_falso = false;

/**/ 

console.log(String(numero_entero)+4); 




/* como saber que tipo de dato es */

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof numero_falso);
console.log(typeof numero_falso);



