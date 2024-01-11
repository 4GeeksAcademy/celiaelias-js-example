/* eslint-disable */

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//      *** APUNTES ***      //

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

const arr = ["pepe", "maria", "juan", "jose", "barbara", "lola", "Patricia"];

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
const consoleLogIt = (el, i) => {
  console.log(`valor es ${el} en la posición ${i}`);
};
arr.forEach(consoleLogIt);

let aux = arr.forEach(consoleLogIt);
console.log(aux);


/*
//Higher order function (callback)
const consoleLogIt = (el, i) => {
  return `valor es ${el} en la posición ${i}`);
//forEach no devuelve nada
arr.forEach ((el, i) => {
  return `valor es ${el} en la posición ${i}`);
});
let objArray = [{nombre: "pepe"}, {nombre: "lola"}]
//map
let aux = arr.map(consoleLogIt);

objArray = objArray.map((el)=>el.city="Sevilla")

console.log(aux);

*/



//Higher order function (callback)
const consoleLogIt = (el, i) => {
  return `valor es ${el} en la posición ${i}`);
//forEach no devuelve nada
arr.forEach ((el, i) => {
  return `valor es ${el} en la posición ${i}`);
});
let objArray = [{nombre: "pepe"}, {nombre: "lola"}]


//map:

//
let people = [
  { nombre: 'Pepe', edad: 10 },
  { nombre: 'Maria', edad: 20 },    
];

people = people.map(el => {
  return {
      ...el,  
      ciudad: 'Sevilla' 
  };
});

console.log(people);

let objArr = [{ nombre: "pepe" }, { nombre: "lola" }];

objArr = objArr.map(el => {
el.city = "sevilla";
return el;
});

console.log(objArr)

//

//filter
let filtered = arr.filter((el,i) => {
  return (el[0].toLowerCase() == "p");
});
console.log(filtered);

/*
let filtered = arr.filter((el,i) => el[0].toLowerCase() == "p");
console.log(filtered);
*/

//reduce
const arrNumber = [5,8,4,6,8,2,6]
let total = arrNumber.reduce((acc, el) => acc + el);
console.log(total);


//sort
console.log(arr.sort(a, b) => a.toLowerCase() - b.toLowerCase());
console.log(arrNumber.sort((a, b) => b - a));


const arrowFunction = nombre => `Hola ${nombre}`;

console.log(arrowFunction("pepe"));


//
//

function fullName(a,b) {
  let name = a.toUpperCase();
  let lastName = b;

  let completeName = name + " " + lastName;

  return completeName;
  
}

console.log(fullName('123','456'));
console.log(fullName('Erwin','Aguero'));

let human = fullName('Miriam', 'Perez');


//
window.onload = function () {
  console.log("Hello Rigo from the console!");
  alert("Hola cómo estás?");
  prompt("Ingresa un valor");
  let result = promt("Ingresa un valor");

  console.log(result);
}


//excuse generator

//en el html:
<p id="excuse">My dog ate my homework</p>

//en el js:
window.onload = function () {
  console.log("Hello Rigo from the console!");
  let excuseHolder = document.getElementById("excuse");

  excuseHolder.innerHTML = who[0] + " " + action[1] + " " + what[0] + " " + when[2];
}

