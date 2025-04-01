export function aggiungiLibro(n, g, p) {
    return { nome: n, genere: g, prezzo: p };
}

export function creaCliente(nome, punti) {
    return { 
        nome: nome, 
        username: generaUsername(nome), 
        puntiFedelta: punti, 
        libriAcquistati: []
    };
}

export function generaUsername(nome) {
    return nome.replace(/ /g, "_").toLowerCase();
}

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

export function filtraPerGenere(clienti, genere) {
    return clienti.filter(cliente => 
        cliente.libriAcquistati.some(libro => libro.genere.toLowerCase() === genere.toLowerCase())
    );
}

export function totaleSpeso(clienti) {
    return clienti.reduce((totale, cliente) => 
        totale + cliente.libriAcquistati.reduce((somma, libro) => somma + libro.prezzo, 0)
    , 0);
}

export function clienteConPiuLibri(clienti) {
    return clienti.reduce((topCliente, cliente) => 
        cliente.libriAcquistati.length > (topCliente?.libriAcquistati.length || 0) ? cliente : topCliente
    , null);
}
