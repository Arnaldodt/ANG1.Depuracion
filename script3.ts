function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // Esto funciona:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // ¿Qué hago si alguien no tiene un segundo nombre?
 //console.log(fullName("Jimbo", "Jones"));
 console.log(fullName("Jimbo", "Jones", "campo faltante"));
 
 /*
  
  El error se genera en la linea 8
  la funcion fullName tiene 3 parametros y le estamos pasando solo 2
  la solucion esta en la linea 9
 
  */