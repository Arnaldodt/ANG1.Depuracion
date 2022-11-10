var increment = (x:number) => x + 1;
// Esto funciona bien:
console.log(increment(3));
var square = (x:number) => x * x;
// Esto no me está mostrando lo que quiero:
console.log(square(4));
// Esto no está funcionando:
var multiply = (x:number,y:number) => x * y;
console.log(multiply(3,4));
// Ni esto está funcionando:
var math = (x:number,y:number) => {let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}
console.log(math(3,4));
/*
   los prametros de las funciones felchas deben ir entre () y con tipo de datos 
   la liena 4 debe ir sin {}, para que el return se automatico
   la funcion de la linea 10 debe encerrar todas las lineas entre {}

   las funciones multiply y math no se estan llamando
*/