// Crea un array vuoto.
//  Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const listaNumeri = [""];

for (let i = 0; i < 6; i++ ) {
    let userNumber = number.parseInt(prompt("Type a number"))

    if (userNumber % 2 === 0) {
        listaNumeri.push(userNumber)
    }
}