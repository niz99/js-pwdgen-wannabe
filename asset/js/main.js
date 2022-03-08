const nome = prompt("Qual è il tuo nome?");
console.log(nome);
const cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);
const colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);

let password = `La tua password è ${nome}${cognome}${colore}21`;
console.log(password)

document.getElementById("pass").innerHTML = password;

