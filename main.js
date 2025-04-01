/**
 * Importa le funzioni dal modulo utils.js
 * @module utils
 */
import * as f from "./utils.js";

/**
 * Array che contiene i clienti registrati
 * @type {Array<Object>}
 */
let clienti = [];

/**
 * Creazione di un nuovo cliente Mario Rossi con 50 euro di saldo
 * @type {Object}
 */
let mario = f.creaCliente("Mario Rossi", 50);

/**
 * Creazione di un nuovo cliente Pier Ferdinando con 20 euro di saldo
 * @type {Object}
 */
let pier = f.creaCliente("Pier Ferdinando", 20);

/**
 * Mario acquista alcuni libri
 */
f.acquistaLibro(mario, "Harry Potter", "Fantasy", 15.00);
f.acquistaLibro(mario, "Il Signore degli Anelli", "Fantasy", 20.00);

/**
 * Pier acquista un libro
 */
f.acquistaLibro(pier, "Io, Robot", "Sci-Fi", 14.00);

/**
 * Aggiunge i clienti all'array
 */
clienti.push(mario, pier);

/**
 * Mostra i dettagli dei clienti
 */
f.mostraDettagli(mario);
f.mostraDettagli(pier);

/**
 * Filtra i clienti che amano il genere Fantasy
 */
console.log("Clienti amanti della Fantasy:", f.filtraPerGenere(clienti, "Fantasy"));

/**
 * Calcola il totale speso da tutti i clienti
 */
console.log("Totale speso in libri:", f.totaleSpeso(clienti) + "€");

/**
 * Trova il cliente che ha acquistato più libri
 */
console.log("Cliente con più libri acquistati:", f.clienteConPiuLibri(clienti)?.nome);
