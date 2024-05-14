// Fai inserire un numero, che chiameremo N, all'utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N = number.parseInt(prompt("Type a number"));

let newArray = [];

for (let i=0; i < N; i++) {
    newArray = Array.from({ length: 10},Math.floor(Math.random() * 100) + 1);
}