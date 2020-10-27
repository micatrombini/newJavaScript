
//6)
//a)
//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
//guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.


var sumatoria = function(arg1, arg2) {
    return arg1 + arg2;
}
var result = sumatoria(3, 15);
console.log('Resultado: ', result);

//b)
//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un 
//número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
//resultado.

var suma2 = function(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        alert('Uno de los parámetros no es un número.')
        return NaN;
    } else {
        return arg1 + arg2;
    }
}
var result2 = suma2('welcome', 1);
console.log('Resultado 2: ', result2);

//c)
//Crear una función validate integer que reciba un número como parámetro 
//y devuelva verdadero si es un número entero.

var validInt = function(num) {
    if (num === Math.floor(num)) {
        return true;
    } else {
        console.log('El numero ' + num + ' no es entero');
    }
}
var validate = validInt(2.5);
console.log(validate);

//d)
//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero 
//(redondeado).

var suma3 = function(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        alert('Uno de los p no es un núm')
        return NaN;
    } else if (arg1 !== Math.floor(arg1)) {
        alert('El primer arg no es entero.');
        return Math.round(arg1);
    } else if (arg2 !== Math.floor(arg2)) {
        alert('El segundo arg no es entero.');
        return Math.round(arg2);
    } else {
        return arg1 + arg2;
    }
}
var result3 = sum

//e)
//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero 
//(redondeado).
var sum4Validate = function(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        alert('Uno de los p no es un número.')
        return NaN;
    }
}

var suma4 = function(arg1, arg2) {
    sum4Validate(arg1, arg2);
    return arg1 + arg2;
}

var result4 = suma2('Hello', 1);
console.log('Resultado 4: ', result4);

