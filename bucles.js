// Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while

for(let i=0; i<=10; i++){
    console.log(i)
}

let i=0
while(i <= 10){
    console.log(i);
    i++
}

let k=0
do{
    console.log(k)
    k++
}while(k <= 10)

// Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let j = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

let h = 10;
do {
  console.log(k);
  k--;
} while (k >= 0);

// Itera de 0 a n usando el bucle for

// Definir el valor de n
const n = 10;

// Usando el bucle for para iterar de 0 a n
for (let i = 0; i <= n; i++) {
  console.log(i);
}

/*Escribe un bucle que haga el siguiente patrón usando console.log():

    #
    ##
    ###
    ####
    #####
    ######
    ####### */

// Definir el número de líneas del patrón
const num = 7;

// // Usando un bucle for para imprimir el patrón
for (let i = 1; i <= num; i++) {
    let pattern = ''; // Inicializar una cadena vacía para almacenar el patrón en cada línea
    for (let j = 0; j < i; j++) {
        pattern += '#'; // Agregar '#' a la cadena 'pattern'
    }
    console.log(pattern); // Imprimir la cadena 'pattern' en cada iteración
}

for(let i=0; i<=10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

// Imprimir la cabecera
console.log("i\ti^2\ti^3");

for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

// Definir el límite superior del patrón
const limiteSuperior = 10;

// Imprimir la cabecera
console.log("i\ti^2\ti^3");

// // Usar un bucle for para generar el patrón
for (let i = 0; i <= limiteSuperior; i++) {
    const iCuadrado = i ** 2; // Calcular i al cuadrado
    const iCubo = i ** 3; // Calcular i al cubo
    console.log(`${i}\t${iCuadrado}\t${iCubo}`);
}

// Usa el bucle for para iterar de 0 a 100 e imprima solo números pares

for(i=0; i<=100; i+=2){
 console.log(i)
}

// // Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for(i=1; i<=100; i+=2){
    console.log(i)
   }

// Usa el bucle for para iterar de 0 a 100 e imprima los solo números

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// // Usar un bucle for para iterar de 0 a 100 e imprimir solo números primos
for (let i = 0; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}

// Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let suma = 0
for (let i = 0; i <= 100; i++) {
   suma = suma + i
}

console.log('la suma de todos los numeros es ' + suma)

// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

let sumPares1 = 0
let sumImpares1 = 0

for(let i=0; i<=100; i=i+2){
    sumPares = sumPares + i
}

for(let i=1; i<=100; i=i+2){
    sumImpares = sumImpares + i
}

console.log(`La suma de todos los pares de 0 a 100 es ${sumPares}. Y la suma de todos los impares de 0 a 100 es ${sumImpares}.`)

// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

let sumPares = 0;
let sumImpares = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumPares += i;
  } else {
    sumImpares += i;
  }
}

const sumas = [sumPares, sumImpares];

console.log(sumas);

// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos

function generarNumerosAleatoriosUnicos(n, min, max){
    let numerosAleatorios = new Set()
    while(numerosAleatorios.size < n){
        numerosAleatorios.add(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return[...numerosAleatorios]
}

const matrizNumerosAleatorios = generarNumerosAleatoriosUnicos(5, 1, 100)
console.log(matrizNumerosAleatorios)

// // Desarrolla un pequeño script que genera un id aleatorio de seis caracteres

function generarIdAleatorio(n){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id =''
    for (let i = 0; i < n; i++) {
        id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return id;
}

const idAleatorio = generarIdAleatorio(6)
console.log(idAleatorio)

// Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:

function generarId(numCaracteres){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for(let i=0; i<numCaracteres; i++){
        id = id + caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return id
}

const idAleatorio2 = generarId(15)
console.log(idAleatorio2)

// // Escribe un script que genere un número hexadecimal aleatorio.
function generarHexadecimal() {
  const caracteres = "0123456789abcdef";
  let hexadecimal = "#";
  for (let i = 0; i < 6; i++) {
    hexadecimal = hexadecimal + caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return hexadecimal;
}

let numeroHexadecimal = generarHexadecimal()
console.log(numeroHexadecimal)



  
