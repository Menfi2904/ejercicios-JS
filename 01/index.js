

const randNum = Math.random(); // crea un número aleatorio entre 0 y 0,999999
console.log(randNum);

// Vamos a crear un número aleatorio entre 0 y 10

const num = Math.floor(Math.random() * 11); // crea un número aleatorio entre 0 y 10
console.log(num);

let randomNum = Math.random()
let random = randNum * 11

let random2 = Math.floor(random)
console.log(random2)

const parrafo =
  "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia, Helsinki.\
Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender. \
A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
Fue una de las experiencias más gratificantes e inspiradoras.\
Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
Espero que tú también estés disfrutando.";

console.log(parrafo);

let string =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(string.lastIndexOf("love")); // 67
console.log(string.lastIndexOf("you")); // 63
console.log(string.lastIndexOf("JavaScript"));