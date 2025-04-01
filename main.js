import * as f from "./utils.js";

let clienti = [];
let mario = f.creaCliente("Mario Rossi", 50);
let pier = f.creaCliente("Pier Ferdinando", 20);

f.acquistaLibro(mario, "Harry Potter", "Fantasy", 15.00);
f.acquistaLibro(mario, "Il Signore degli Anelli", "Fantasy", 20.00);
f.acquistaLibro(pier, "Io, Robot", "Sci-Fi", 14.00);

clienti.push(mario, pier);

f.mostraDettagli(mario);
f.mostraDettagli(pier);

console.log("Clienti amanti della Fantasy:", f.filtraPerGenere(clienti, "Fantasy"));
console.log("Totale speso in libri:", f.totaleSpeso(clienti) + "€");
console.log("Cliente con più libri acquistati:", f.clienteConPiuLibri(clienti)?.nome);
