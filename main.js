const countries = require('./countries')
const webTechs = require('./webTechs')

console.log(countries.indexOf('Ethiopia'))

// En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

if(webTechs.indexOf('Sass') !== -1 ){
    console.log('Sass es un preproceso de CSS')
}else{
    webTechs.push('Sass')
    console.log(webTechs)
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = [frontEnd, backEnd]

console.log(fullStack);

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const word = text.replace(/[.,]/g, "").split(" ")

const numberOfWords = word.length

console.log(word)
console.log('Numero de palabras: ' + numberOfWords)

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift('Meat')

console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.pop()
console.log(shoppingCart)

shoppingCart[2] = 'Green Tea'

console.log(shoppingCart)


// - Ordene el array y encuentre la edad mínima y máxima
// - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
// - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
// - Encuentre el rango de las edades (max menos min)
// - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b)

const minAge = ages[0]
const maxAge = ages[ages.length - 1]



const middIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[middIndex - 1] + ages[middIndex]) / 2;
} else {
    medianAge = ages[middIndex];
}


// Encontrar la edad promedio
const sum = ages.reduce((acc, curr) => acc + curr, 0);
const averageAge = sum / ages.length;

// Encontrar el rango de las edades
const ageRange = maxAge - minAge;

// Comparar el valor de (mín - promedio) y (máx - promedio)
const diffMin = Math.abs(minAge - averageAge);
const diffMax = Math.abs(maxAge - averageAge);

console.log("Edad mínima:", minAge);
console.log("Edad máxima:", maxAge);
console.log("Edad media:", medianAge);
console.log("Edad promedio:", averageAge);
console.log("Rango de edades:", ageRange);
console.log("Diferencia entre la edad mínima y el promedio:", diffMin);
console.log("Diferencia entre la edad máxima y el promedio:", diffMax);





function minMaxAge(ageArr) {
  let menor = ageArr[0];
  let mayor = ageArr[0];

  for (num of ageArr) {
    menor = menor < num ? menor : num;
    mayor = mayor > num ? mayor : num;
  }

  return [menor, mayor];
}

let ageArray = minMaxAge(ages);
console.log(ageArray);


const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

// Cortar los diez primeros países de la array de países
  const firstTenCountries = countries.slice(0, 10)
 


// Encontrar el país o países de en medio en la array de países
const middleIndex = Math.floor(countries.length / 2)
const middleCountries = countries.length % 2 === 0 ? [countries[middleIndex - 1], countries[middleIndex]] : [countries[middleIndex]]

// Dividir el array de países en dos arrays iguales si es par
// Si el array de países no es par, agregar un país más para la primera mitad


const halftIndex = Math.ceil(countries.length / 2)
const firstHalfCountries = countries.slice(0, halftIndex)
const secondHalfCountries = countries.slice(halftIndex)



console.log("Los diez primeros países:", firstTenCountries);
console.log("País(es) de en medio:", middleCountries);
console.log("Primera mitad de países:", firstHalfCountries);
console.log("Segunda mitad de países:", secondHalfCountries);