// Fai inserire un numero, che chiameremo N, all'utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N = Number.parseInt(prompt("Type a number"), 10);



for (let i=0; i < N; i++) {
    let newArray = [];

    for (let i=0; i < 10; i++) {
        newArray.push(Math.floor (Math.random() * 100) + 1);
    }

    console.log(newArray);
}

