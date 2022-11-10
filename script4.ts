interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // Esto parece funcionar bien:
 console.log(graduate(christine));
 // Este tiene problemas:
 console.log(graduate(jay));
 
  /*
   
   El error se genera en la linea 22
   la funcion graduate recibe una variable de tipo Student (interface)
   jay no tiene la misma definicion, tiene una diferencia en el atributo belt
   la solucion esta en la linea 17, se cambia belt por belts
   
   */