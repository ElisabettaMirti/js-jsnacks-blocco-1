// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for ( let i = 0; i < numbersList.length; i++) {
    if (i % 2 === 1) {
        numbersSum += numbersList[i];
    }
}

console.log(numbersSum)