'use strict'
alert("hola");

/*  TENEMOS QUE HACER UN PROGRMA QUE NOS PIDA DOS NUMERO, y que nos diga cual es mayor, cual es menor y cuales son iguales */
// Plus: si los numeros no son un numero o son menores o iguales a 0, nos vuelva a pedir que introdcuzca un dato 

var uno = parseInt(prompt('Introduce el primer nombre', 0));
var dos = parseInt(prompt('Introduce el segundo nombre', 0));

while(uno <= 0 || dos <= 0 || isNaN(uno) || isNaN(dos)){
	uno = parseInt(prompt('Introduce el primer nombre', 0));
	dos = parseInt(prompt('Introduce el segundo nombre', 0));
}

if(uno == dos){
	alert("los numeros son iguales");
}else if(uno > dos) {
	alert("El mayor es:" +uno);
	alert("El menor es:" +dos);

}else if (dos > uno){
	alert("El mayor es:" +dos);
	alert("El menor es:" +uno);	
}else{
	alert("introduce un numero correcto");
}

// el promt siempre reocge un string 

// El primer IF verifico si son iguales (si son iguales mensaje), y en el else if compruebo si uno es mayor a dos (si se cumple mensaje )