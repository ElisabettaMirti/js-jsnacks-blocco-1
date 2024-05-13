// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const guestList = ["Lamù", "Bart", "Oscar", "Remì", "Chicca", "Romina", "Olly", "Sergio", "Ciro", "Tigro", "Ignazio", "MammaGatta", "Mimì", "Zazà", "Margot", "Titina"]

let guestName = prompt("Scrivi il tuo nome");

console.log(guestList.includes(guestName))

