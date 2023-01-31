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
    const regularword=(arrayword[i]);
    //console.log(regularword);
}

//STAMPA UN CICLO CON SENSO INVERTITO
for(let i=0;i >= arrayword.length;i--){
    const invertword = (arrayword[i]);
    console.log(invertword);

   
    if(regularword==invertword){ 
       const poligamo=("La parola è poligama");
       console.log(poligamo);
    }else{
        const nopoligamo=("La parola non è poligama");
        console.log(nopoligamo);
    }
}

//CONFRONTA LE PAROLE OTTENUTE

//SE SONO UGUALI LA PAROLA E' POLIGAMA
