// función tipada
function sumar1(x, y) {
    return x + y;
}
// función anónima tipada con inferencia de tipo
var sumar2 = function (x, y) { return x + y; };
// función de flecha tipada con inferencia de tipo
var sumar3 = function (x, y) { return x + y; };
// función de flecha tipada sin inferencia de tipo (se utiliza el tipo Function)
var sumar4 = function (x, y) { return x + y; };
// creación de una variable que posteriormente almacenará una función
var sumar5;
// error
// sumar5 = 5;
sumar5 = sumar4;
console.log(sumar1(3, 2));
