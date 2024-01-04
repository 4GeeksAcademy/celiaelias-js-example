/* eslint-disable */

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

/*

const arr = [1];

arr.push[2];
arr = [1,2];

console.log(arr);



const = person {
  nombre: "Pepe";
  edad: "22";
}

person.edad = 23

console.log(person);

*/

const arr = ["pepe", "maria", "juan", "jose", "barbara", "lola"];

console.log(arr[4]);

console.log(arr.length);

console.log(arr[arr.length - 1]);

//clásico
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  console.log(arr[i]);
  console.log("vive en murcia");
  console.log(arr[i] + " vive en murcia");
  console.log(`${arr[i]} vive en madrid`);
}

//for of --> devuelve el valor
for (let i of arr) {
  console.log("for of", i);
}

//devuelve el índice
for (let i in arr) {
  console.log("for in", i);
  console.log(arr[i]);
}

//while
let i = 0
while (i < 4) {
  console.log("i es menor que 4")
  i++ //importante poner que al variable de iteración aumente con cada ciclo que se ejecuta
}

//do while
//siempre se a a ejecutar una vez, se cumpla o no una condición. lo hace mientras i < 1 sea verdadero. primero ejecuta, luego verifica
do {
console.log("me ejecuté");
i++
} while (i < 1);

//Higher order function (callback)

