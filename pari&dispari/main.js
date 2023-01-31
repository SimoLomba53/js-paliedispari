debugger;
//UTENTE SCEGLIE PARI O DISPARI
const userParioDispari=prompt("pari o dispari?");
console.log(userParioDispari);
//INSERISCE UN NUMERO DA 1 a 5
const userNumber=parseInt(prompt("scegli un numero da 1 a 5"));
console.log(userNumber);
//VIENE GENERATO UN NUMERO RANDOM DA 1 a 5 PER IL PC(funzione)
generate(1,5);
console.log(generate);

function generate(num1,num2){
    const pcRandomNumber=parseInt(Math.floor(Math.random()*num2 - num1) + num1);
    console.log(pcRandomNumber);
    //I DUE NUMERI VENGONO SOMMATI
    const sommaResult=(userNumber+pcRandomNumber);
    console.log(sommaResult);
    //VIENE STABILITO SE LA SOMMA E' PARI O DISPARI(FUNZIONE)
    if(sommaResult % 2 == 0){
        const risultatoPari=("Il risultato è pari");
        console.log(risultatoPari);
    }else{
        const risultatoDispari=("Il risultato è dispari");
        console.log(risultatoDispari);
    }

}

//DICHIARIAMO CHI HA VINTO