'use strict'
alert("Hola");


/* operadores logicos = 
AND(Y): &&
OR(0): ||
NEGACION: !
*/ 


//negacion 

var year = 2018;

if(year != 2016){
console.log("El año no es el 2016 relamente es:"+year);

}
 
 //AND VERIFCAR

 var nueva = 2016;

 if(nueva >= 2000 && nueva <= 2014){
 	console.log("primercondición");
 }else{ 
 	console.log("segundacondicon");

 }

var nuevo_ano = 2015;

if(nuevo_ano == 2018 || nuevo_ano == 2015){
	console.log("El años es"+nuevo_ano);
}

/* Switch*/

var edad = 40;
var imp = "";

// CASE es para compribar un caso - switch(variable) / break para terminar el caso / default si nada de lo demas pasa


switch(edad){
	case 18: 
		imp = "Acabar de cumplir la mayoria de edad";
	break;

	case 40: 
		imp = "crisis de los 40";
		break;

	case 75: 
		imp = "eres ya un anciano";
		break;
		default:
			imp = "Acabar de cumplir la mayoria de edad";
	break;
}

console.log(imp);



