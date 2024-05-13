// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let numA = Number.parseInt(prompt("Type a number"), 10);
let numB = Number.parseInt(prompt("Type another number"), 10);

if (numA > numB) {
    console.log(numA)
} else if (numB > numA) {
    console.log(numB)
}else {
    console.log("they're the same number")
}