let edad = prompt("Ingrese su edad:")

if(edad > 18){
    console.log('Tiene la edad suficiente para conducir')
}
else{
    console.log('te falta tres anos para conducir')
}

let a = 7;
let b = 17;

a > b
  ? console.log(`${a} es mayor que ${b}`)
  : console.log(` ${a} es menor que ${b}`);

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let calificacion = prompt('ingresa una califacion:')

if(calificacion >= 80){
    console.log(`Calificacion obtenida es ${calificacion} corresponde a una A`)
}else if(calificacion >= 70){
    console.log('B')
}else if(calificacion >= 60){
    console.log('C')
}else if(calificacion >= 50){
    console.log('D')
}else{
    console.log('F')
}

// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

// let temporada = prompt("Ingresa un mes del año:");
// let mes = temporada.toLowerCase();

switch (mes) {
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("La temporada es otoño");
    break;
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("La temporada es Invierno");
    break;
  case "marzo":
  case "abril":
  case "mayo":
    console.log("La temporada es primavera");
    break;
  case "junio":
  case "julio":
  case "agosto":
    console.log("La temporada es Verano");
  default:
    console.log("mes no valido");
    break;
}



function laborable (dia) {
    if(dia === 'lunes' || dia === 'martes' || dia === 'miercoles' || dia === 'jueves' || dia === 'viernes'){
        return 'es una dia laborable'
    }else if(dia === 'sabado' || dia === 'domingo'){
        return 'no es un dia laborable'
    }else{
        return 'no es un dia de la semana valido'
    }
}

let dia = 'SABADO'
let resultado = laborable(dia.toLowerCase())
console.log(resultado)


function diasEnMes(mes, año) {
    // Array con el número de días para cada mes
    const diasPorMes = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    // Si el mes es febrero y es un año bisiesto, el número de días será 29
    if (mes === 1 && ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0)) {
        return 29;
    }
    
    // Para los demás meses, obtener el número de días del array
    return diasPorMes[mes];
}

// Ejemplo de uso
let mes = 3; // Enero (los meses se indexan desde 0)
let año = 2024; // Año bisiesto

console.log(`El número de días en el mes ${mes + 1} del año ${año} es: ${diasEnMes(mes, año)}.`);
