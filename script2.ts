function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // Esto está funcionando bien:
 console.log(sayHello("Kermit"));
 // ¿Por qué no está funionando? Quiero que se devuelva a "Hello, 9!"
 //console.log(sayHello(9));
 console.log(sayHello("9"));
 
 /*
 
 El error se genera en la linea 7
 la funcion myString recibe un string y le estamos pasando un numeric
 la solucion esta en la linea 8
 
 */