/* punto 1 Declarar dos variables con la palabra reservada "var", 
imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" en la consola.*/

var a = 10;
var b = 5;
var suma = (a + b);
var resta = (a - b);
var multiplicacion = (a * b);
var division = (a / b); 

console.log('Si a es igual a = ' + a + ' y b es igual a = ' + b);
console.log('el resultado de la suma de a y b es ' + suma);
console.log('el resultado de la resta de a y b es ' + resta);
console.log('el resultado de la multipliacion de a y b es ' + multiplicacion);
console.log('el resultado de la division de a y b es ' + division);

// punto 2 Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.

let c = "hola "; let d = "mundo"; 

console.log('en este problema c es igual a ' + c + ' y d es igual a ' + d)
console.log(' y su concatenacion es igual a '+ (c + d));
// punto 3 Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.

const e = true;
const f = {};

console.log('El tipo de variable de e es igual a = ' + typeof(e));
console.log('El tipo de variable de f es igual a = ' + typeof(f));

/* punto 4 Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, 
un string, un booleano y un objeto vacío, en ese mismo orden.*/

var obj = {
    a: 1,
    b: "hola",
    c: false,
    d: {}
   }
console.log( obj ); 