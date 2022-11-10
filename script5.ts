class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // Esto no está haciendo una instancia de ninja, por alguna razón:
 //const shane = Ninja();
 const shane = new Ninja("Arnaldo","Dominguez");
 // Puesto que estoy teniendo problemas haciendo una instancia de ninja, decidí hacer esto:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Ahora haré una función de estudio, que se parece mucho a nuestra función de graduados como arriba:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Ahora esto tiene problemas:
 //console.log(study(turing));
 console.log(study(shane));
 
 /*
 
     los errores se encuentran en las lineas 13 y 26
     error 13: al instanciar una una clase debe llevar el new y la clase tiene un constructor 
     que espera 2 parametros que no lo lleva (solucion linea 14)
     error 26: la function study espera una variable del tipo class ninja, el parametro turing 
     no tiene el mismo tipo (solucion linea 27)
 
 */