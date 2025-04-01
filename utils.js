export function compraLibro(n,g,p){
    return{nome:n,genere:g,prezzo:p};
}

export function creaCliente(nome,punti){
    return{nome:nome,username:generaUsername(nome),puntiFedelta:punti,libriAcquistati:[]};
}

export function generaUsername(nome){
    return nome.replace(/ /g,"_").toLowerCase();
}

export function stampa(a){
    a.forEach(element => {
        console.log("Nome:"+element.nome);
        console.log("Username:"+element.username);
        console.log("Punti Fedeltà rimaneti:"+element.puntiFedelta);
        element.LibriAquistati.forEach(x => {
            console.log("Titolo:"+x.nome);
            console.log("Genere:"+x.genere);
            console.log("Prezzo:"+x.prezzo);

        }) 
        console.log("");
    });
}

