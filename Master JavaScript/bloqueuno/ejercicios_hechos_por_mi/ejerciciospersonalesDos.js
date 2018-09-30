'use strict'

/* Ejercicio uno :
Mediante un bucle, mostrar la media y la suma de los dos numeros introducidos por un usario*/


/*


var year = 1992;
while(year < 2500 ){
    console.log("estamos en el ano"+year);
    year++;
}


var year = 2015;

while(year != 1992){
    console.log(year);
    year--;
}

*/

var suma = 0;
var contador= 0;

do{
    var numero_ingresado = parseInt(prompt('introduci un numero positivo',0));
         if(isNaN(numero_ingresado)){
            numero_ingresado= 0;
        }else if(numero_ingresado>0){
             suma = suma + numero_ingresado;
            contador++;
   }




}while(numero_ingresado>=0)

alert('la suma de todos los numero es '+ suma);

alert('la media de todos los numeros es '+ (suma/contador));