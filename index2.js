//2)
//a)Crear una variable de tipo string con al menos 10 caracteres 
//y convertir todo el texto en mayúscula (utilizar toUpperCase).


var e = "strongyloides"
var may = e.toUpperCase();

//b)
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
//caracteres guardando el resultado en una nueva variable (utilizar substring).

var f = "programming";
var res = f.substring(1, 5);

//c)
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
//3 caracteres guardando el resultado en una nueva variable (utilizar substring).


var g = "programming";
var resone = g.substring(16, 18);

//d)
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
//en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
//(utilizar substring, toUpperCase, toLowerCase y el operador +).
var h = "archipelago";
var subone = h.substring(1);
var maytwo = subone.toUpperCase();
var subtwo = h.substring(2, 11);
var min = subtwo.toLowerCase();
var c = maytwo + min;


//e)
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var i = "beatiful flowers";
var n = i.indexOf("flowers");

//f)
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera 
//letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, 
//toUpperCase, toLowerCase y el operador +).
var t = "aspergillus penicilloides";
var ntwo = t.indexOf("penicilloides");
var subthree = t.substring(1, 11);
var maythree = subthree.toUpperCase(1);
var minthree = subthree.toLowerCase(2, 11);
var subfour = t.substring(13, 25);
var mayfour = subfour.toUpperCase(13);
var minfour = subfour.toLowerCase(14, 25);
var finalice = maythree + minthree + ntwo + mayfour + minfour;
