debugger;
//CHIEDI ALL'UTENTE DI INSERIRE UNA PAROLA
const userword=prompt("Inserisci la tua parola");
console.log(userword);
//CREA UN ARRAY
let arrayword=[];
//INSERISCI LA PAROLA INSERITA NELL'ARRAY
const word=arrayword.push(userword);
//STAMPA UN CICLO CON SENSO GIUSTO
for(let i=0;i < arrayword.length;i++){
    const regularword=(arrayword.length[i]);
    console.log(regularword);
}
//STAMPA UN CICLO CON SENSO INVERTITO
for(let i=0;i >= arrayword.length;i--){
    const invertword = (arrayword.length[i]);
    console.log(invertword);

    if(regularword==invertword){
        console.log("La parola è poligama")
    }else{
        console.log("La parola non è poligama")
    }
}
//CONFRONTA LE PAROLE OTTENUTE
//SE SONO UGUALI LA PAROLA E' POLIGAMA
