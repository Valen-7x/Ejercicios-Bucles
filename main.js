//Replicar un programa que permita el ingreso de un numero y// 
//muestre su tabla de mutiplicar (Los primeros 10 multiplos)//

let numero=Number(prompt("Ingrese un numero"))
for(let i = 1; i <= 10; i++){
    console.log((`${i} x ${numero} = `) )
    console.log(i*numero);
}

//Realiza un programa que permita el ingreso de numeros
//los cuales se tienen que ir acumulando
// el ingreso de datos termina cuando el usuario ingrese valor 0
let acumulado;
let numeros;
function ingresoNum(){
    while (numeros !== 0) {
        numeros = Number(prompt("Ingrese un número (o 0 para terminar):"))
       acumulado += numeros
       alert(acumulado)
     }     
}
ingresoNum()

/*Guarda el número ﬁnal del ejercicio N°2 en una variable, el mismo deberá estar en un
rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor
guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle
al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario
adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en
cuantos intentos lo ha realizado. */
let numeroSecreto= acumulado
let i=1
function adivinanza(){
    for (let numeroIngresado; numeroIngresado!==numeroSecreto;i++) {
        numeroIngresado=prompt("Ingrese un numero");
        if(numeroIngresado > numeroSecreto){
          alert("El valor ingresado es mayor que el numero secreto")
        } else if(numeroIngresado < numeroSecreto){
          alert("El valor ingresado es menor que el numero secreto")
        } else{
          alert("¡¡Felicitacion adivinó!! lo ha realizado en " +  i  + " intentos")
          break;
        }
      }
}
adivinanza()
/* 4 Realizar un programa que reciba un número y muestre de alguna forma todos sus
divisores.*/
function encontrarDivisores(numero) {
    console.log("Los divisores de " + numero + " son:");
    
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        console.log(i);
      }
    }
  }
  
  const numero2 = parseInt(prompt("Ingrese un número:"));
  encontrarDivisores(numero);

  // ejercicio 5 --Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre
    /*un mensaje por consola con cada uno de los elementos del array.*/
  
  
    const array = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5", "elemento6", "elemento7", "elemento8", "elemento9", "elemento10"];

    for (let i = 0; i < array.length; i++) {
      console.log("Elemento: " + array[i]);
    }
    
    //ejercicio 6--
    
let numer0s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numer0s.length; i++) {
  var resultado = numer0s[i] * 2;
  console.log(resultado);
}
    
//ejercicio 7
    
let  familia = [
  { nombre: 'Juan', edad: 35, relacion: 'padre', ciudad: 'Madrid' },
  { nombre: 'María', edad: 32, relacion: 'madre', ciudad: 'Madrid' },
  { nombre: 'Pedro', edad: 10, relacion: 'hijo', ciudad: 'Madrid' },
  { nombre: 'Laura', edad: 8, relacion: 'hija', ciudad: 'Madrid' },
  { nombre: 'Carlos', edad: 60, relacion: 'abuelo', ciudad: 'Madrid' }
];

for (let persona of familia) {
  let nombre = persona.nombre;
  let edad = persona.edad;
  let relacion = persona.relacion;
  let ciudad = persona.ciudad;

  console.log('Hola, soy ' + nombre + ', tengo ' + edad + ' años. Soy ' + relacion + ' y vivo en ' + ciudad + '.');
}
    

//ejercici 8

let numimPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numimPares.length; i++) {
  if (numeros[i] % 2 !== 0) {
    console.log(numimPares[i]);
  }
}

//ejercicio 10

let sumaPares = 0;
let sumaImpares = 0;

while (true) {
  let numero = parseInt(prompt('Ingrese un número (ingrese 0 para terminar):'));

  if (numero === 0) {
    break;
  }
  if (numero % 2 === 0) {
    sumaPares += numero;
  } else {
    sumaImpares += numero;
  }
}

//ejercicio 11
let numeritos = [5, 8, 2, 10, 3, 1, 6, 9, 4, 7];

let maximo = numeritos[0];

for (let i = 1; i < numeritos.length; i++) {
  if (numeritos[i] > maximo) {
    maximo = numeritos[i];
  }
}
console.log('El número más grande es: ' + maximo);
    
    