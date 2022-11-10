class Elephant {
    constructor(public age: number){}
    birthday = () => this.age++;
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // ¿Por qué la edad de Babar no cambió? Arregla esto mediante el uso de una función de flecha en la clase Elefante
 
 