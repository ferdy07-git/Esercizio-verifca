/**
 * Crea un oggetto libro
 * @param {string} n - Nome del libro
 * @param {string} g - Genere del libro
 * @param {number} p - Prezzo del libro
 * @returns {Object} Oggetto libro
 */
export function aggiungiLibro(n, g, p) {
    return { nome: n, genere: g, prezzo: p };
}

/**
 * Crea un nuovo cliente
 * @param {string} nome - Nome del cliente
 * @param {number} punti - Punti fedeltà iniziali del cliente
 * @returns {Object} Oggetto cliente
 */
export function creaCliente(nome, punti) {
    return { 
        nome: nome, 
        username: generaUsername(nome), 
        puntiFedelta: punti, 
        libriAcquistati: []
    };
}

/**
 * Genera un username basato sul nome del cliente
 * @param {string} nome - Nome del cliente
 * @returns {string} Username generato
 */
export function generaUsername(nome) {
    return nome.replace(/ /g, "_").toLowerCase();
}

/**
 * Permette a un cliente di acquistare un libro applicando eventuali sconti
 * @param {Object} cliente - Cliente che acquista il libro
 * @param {string} titolo - Titolo del libro
 * @param {string} genere - Genere del libro
 * @param {number} prezzo - Prezzo del libro
 */
export function acquistaLibro(cliente, titolo, genere, prezzo) {
    let sconto = Math.floor(cliente.puntiFedelta / 10);
    let prezzoFinale = Math.max(prezzo - sconto, 0);
    
    if (cliente.puntiFedelta >= sconto * 10) {
        cliente.puntiFedelta -= sconto * 10;
        cliente.libriAcquistati.push(aggiungiLibro(titolo, genere, prezzoFinale));
    } else {
        console.log(`Errore: ${cliente.nome} non ha abbastanza punti fedeltà.`);
    }
}

/**
 * Mostra i dettagli di un cliente
 * @param {Object} cliente - Cliente di cui mostrare i dettagli
 */
export function mostraDettagli(cliente) {
    console.log(`Nome: ${cliente.nome}`);
    console.log(`Username: ${cliente.username}`);
    console.log(`Punti Fedeltà rimanenti: ${cliente.puntiFedelta}`);
    console.log("Libri Acquistati:");
    cliente.libriAcquistati.forEach(libro => {
        console.log(` - ${libro.nome} (${libro.genere}) - ${libro.prezzo}€`);
    });
    console.log("");
}

/**
 * Filtra i clienti che hanno acquistato libri di un certo genere
 * @param {Array<Object>} clienti - Lista dei clienti
 * @param {string} genere - Genere da filtrare
 * @returns {Array<Object>} Lista di clienti che hanno acquistato almeno un libro del genere indicato
 */
export function filtraPerGenere(clienti, genere) {
    return clienti.filter(cliente => 
        cliente.libriAcquistati.some(libro => libro.genere.toLowerCase() === genere.toLowerCase())
    );
}

/**
 * Calcola il totale speso in libri da tutti i clienti
 * @param {Array<Object>} clienti - Lista dei clienti
 * @returns {number} Totale speso in libri
 */
export function totaleSpeso(clienti) {
    return clienti.reduce((totale, cliente) => 
        totale + cliente.libriAcquistati.reduce((somma, libro) => somma + libro.prezzo, 0)
    , 0);
}

/**
 * Trova il cliente che ha acquistato più libri
 * @param {Array<Object>} clienti - Lista dei clienti
 * @returns {Object|null} Cliente con più libri acquistati o null se nessun cliente ha acquistato libri
 */
export function clienteConPiuLibri(clienti) {
    return clienti.reduce((topCliente, cliente) => 
        cliente.libriAcquistati.length > (topCliente?.libriAcquistati.length || 0) ? cliente : topCliente
    , null);
}