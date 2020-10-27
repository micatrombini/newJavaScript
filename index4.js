//4)
//a)
//Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
//si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y 
//sino un alerta con el mensaje “Lower than 0,5”

var al = Math.random(0, 1);
if (al >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert = ("Lower than 0,5");
}

//b)
//Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes 
//mensajes de alerta:


var age = [0, 99];

//i)
//“Bebe” si la edad es menor a 2 años

if (age < 2) {
    alert("Bebe");
}

//ii)
//“Nino” si la edad es entre 2 y 12 años

if (2 < age && age < 12) {
    alert("Nino");
}

//iii)
//“Adolecente” si la edad es entre 13 y 19 años

if (13 < age && age < 19) {
    alert("Adolecente");
    console.log("age: ", age);
}

//iv)
//“Joven” si la edad está entre 20 y 30 años

if (20 < age && age < 30) {
    alert("Joven");
}

//v)
//“Adulto” entre 31 y 60 años

if (31 < age && age < 60) {
    alert("Adulto");
}

//vi)
//“Adulto mayor” entre 61 y 75 años

if (61 < age && age < 75) {
    alert("Adulto mayor");
}

//vii)
//“Anciano” si es mayor a 75 años

if (age > 75) {
    alert("Anciano");
}
