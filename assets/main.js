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

// class student{
//     constructor(name,surname,age){
//         this.name = name,
//         this.surname = surname,
//         this.age = age
//     }
// }

// Creo un'oggetto chiedendo all'utente nome, cognome, età.

var newStudent = {
name: prompt("Insert your name"),
surname:prompt("Insert your surname"),
age: prompt("Insert your age")
};

// Creo uno array di oggetti studeti con le proprietà name and surname.

var arrStudents = [
    {
        name :"Gianni",
        surname : "Morandi",
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
]
// Inserisco all'interno del mio array di oggetti, i dati inseriti dall'utente.

arrStudents.push(newStudent);

// Con questo ciclo controllo tutti i valori del mio array.

 for (var key in arrStudents) {
         console.log(arrStudents[key]);
     }
// Per stampare a schermo il contenuto del mio array, uso un ciclo for.

    for (i = 0; i < arrStudents.length; i++){
        document.getElementById("output").innerHTML += 
        "<li> " +
        "Nome: " + arrStudents[i].name + "<br>" + 
        "Cognome: " + arrStudents[i].surname + "<br>"
        "</li>";
        
    }
    
    console.log(arrStudents);
    console.log(newStudent);