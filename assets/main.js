/*Istruzioni:
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

// Creo oggetto student con le varie proprietà
// var student = {
//     name : "Nicola",
//     surname : "Rizzi",
//     age : 31
// }
// Tramite il ciclo for in, visualizzo le proprietò e il loro valore.
// N
// Creo uno array di oggetti studeti con le proprietà name and surname.

class student{
    constructor(name,surname,age){
        this.name = name,
        this.surname = surname,
        this.age = age
    }
}

var newStudent = new student(prompt("Insert your name"),prompt("Insert your surname"),prompt("Insert your age"));

var arrStudents = [

    {
    name :"Gianni",
    surname : "Morandi"
},
 {
    name :"Claudio",
    surname : "Coccoluto"
},
 {
    name :"Franco",
    surname : "Spezio"
},
 {
    name :"Gianna",
    surname : "Nannini"
},
{
    newStudent
}
]

for (const key in arrStudents) {
    console.log(arrStudents[key]);
}





