// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let numA = Number.parseInt.prompt("Type a number");
let numB = Number.parseInt.prompt("Type another number");

if (numA > numB) {
    console.log(numA)
} else if (numB > numA) {
    console.log(numB)
}else {
    console.log("they're the same number")
}