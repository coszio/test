let nombres  = ['Jorge','Isabel','Juan','Pedro','Karina','Jose','Arturo','Rogelio','Bertha'];


/*
### F1 Crea una funcion llamada mayusculas que reciba como parámetro un arreglo y convierta todos los nombres a mayusula y los escriba en la consola
*/

// CREA TU FUNCION mayusculas aqui:
function mayusculas(arr) {
    for (var i in arr) {
        console.log(arr[i].toUpperCase())
    }
}


/*
### F2 Crea una funcion llamada numVocales que reciba como parámetro un arreglo y cuente el numero de vocales de cada elemento y escriba en consola "datos: tiene [x] vocales , para cada elemento del arreglo" 
*/

// CREA TU FUNCION numVocales aqui:
function numVocales(str) {
    let m = str.match(/[aeiouAEIOU]/g);
    let num = m.length;
    console.log(`${str} tiene: ${num} vocales`); 
}

/*
### F3 Crea una funcion llamada numVocalesArr que reciba un arreglo y mande llamar a la funcion numVocales para que escriba la longitud de cada elemento del arreglo." 
*/

// CREA TU FUNCION numVocalesArr aqui:
function numVocalesArr(arr) {
    for (let i in arr) {
        numVocales(arr[i]);
    }
}



/* 
################ OBJETOS ###############

A) Define un objeto tipo "Perro" que reciba 3 parametros

1) Nombre
2) Color
3) Raza
*/

class Perro {
    constructor(nombre, color, raza) {
        this.nombre = nombre;
        this.color = color;
        this.raza = raza;
    }
    printInfo() {
        console.log(`Nombre: ${this.nombre} , De color: ${this.color} , Raza: ${this.raza}`);
    }
}
/*
B) Crea 3 objectos  con diferentes valores
*/
let perro1 = new Perro("Firulais", "negro", "Corrien Terrier");
let perro2 = new Perro("Solovino", "blanco", "Golden Retriever");
let perro3 = new Perro("Trapis", "Pardo", "Shi-Tzu");
/*
C) Con un console.log escribe el nombre del primer objeto, el color del segundo, y la raza del tercero. Lo puedes hacer en una sola línea o en 3 lineas aparte. 
*/
console.log(`${perro1.nombre} ${perro2.color} ${perro3.raza}`);

/*

*****BONUS****

Crea una método en la definición del objeto "Perro" llamado printInfo()  que escriba en consola todas las propiedades del objeto que lo invoca. 

EJ

fido.printInfo();

Deberia escribir en consola

"Nombre: Fido , De color: Cafe , Raza: Poodle"


*/



/***
 * 
 *        PRUEBA TUS FUNCIONES
 * 
 ***/

// F1
mayusculas(nombres);

// F2
numVocales("aaaaeeeooiilljjjjj");

// F3
numVocalesArr(nombres);




/***
 * 
 *        PRUEBA TUS OBJETOS
 * 
 ***/
perro1.printInfo();
perro2.printInfo();
perro3.printInfo();