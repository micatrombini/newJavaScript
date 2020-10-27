



//5)
//a)
//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
//para mostrar una alerta utilizando cada una de las palabras.

var text = ["flower", "sugar", "happy", "head", "crazy"];

var i;
for (i = 0; i < text.length; i++) {
    alert(text[i]);
}

//b)
//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por 
//cada palabra modificada.


var text = ["flower", "sugar", "happy", "head", "crazy"];

var i;
for (i = 0; i < text.length; i++) {
    var name = text[i];
    var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    alert(nameCapitalized);
}

//c)
//Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con 
//un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta 
//con la cadena completa.

var sentence = '';
for (var i = 0; i < fiveWords.length; i++) {
    sentence = sentence + fiveWords[i] + ' ';
}
alert(sentence);


//d)
//Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, 
//es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el 
//número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).

var arrayVacio= [];
for (var i = 0; i < 10; i++) {
    arrayVacio.push(i);
}
console.log('array con diez repeticiones: ', arrayVacio);