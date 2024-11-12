"use strict";
/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti 
e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e 
falli subiti e stampiamo tutto in console.
*/
// DOM elements selection
const output2 = document.getElementById("snack2");
// Creazione oggetti squadra
const squadra1 = {
    nome: "Milan",
    punti: 0,
    falli: 0,
    descrizione: function(){
        return `nome: ${this.nome} punti ${this.punti} falli ${this.falli}`
    }
}
const squadra2 = {
    nome: "Inter",
    punti: 0,
    falli: 0,
    descrizione: function(){
        return `nome: ${this.nome} punti ${this.punti} falli ${this.falli}`
    }
}
const squadra3 = {
    nome: "Juventus",
    punti: 0,
    falli: 0,
    descrizione: function(){
        return `nome: ${this.nome} punti ${this.punti} falli ${this.falli}`
    }
}
const squadra4 = {
    nome: "Napoli",
    punti: 0,
    falli: 0,
    descrizione: function(){
        return `nome: ${this.nome} punti ${this.punti} falli ${this.falli}`
    }
}
const squadra5 = {
    nome: "Roma",
    punti: 0,
    falli: 0,
    descrizione: function(){
        return `nome: ${this.nome} punti ${this.punti} falli ${this.falli}`
    }
}
// creazione array di squadre;
const arrayDiSquadre = [squadra1, squadra2, squadra3, squadra4, squadra5];
// generazione numeri random da assegnare alle proprieta punti e falli
for(const squadra of arrayDiSquadre){
    squadra.punti = getRndInteger(1, 60);
    squadra.falli = getRndInteger(1, 20);
}
// creazione nuovo array di squadre i cui elementi contengono solo nome e falli
const nuovoArrayDiSquadre = [];
for(const squadra of arrayDiSquadre){
    const nuovaSquadra = {
        nome: squadra.nome,
        falli: squadra.falli,
        descrizione: function (){
            return `nome: ${this.nome} falli ${this.falli}`
        },
    }
    nuovoArrayDiSquadre.push(nuovaSquadra);
}
// output
output2.innerHTML = "Array di squadre<br>";
for(const squadra of arrayDiSquadre){
    output2.append(squadra.descrizione());
    output2.innerHTML += "<br>"
}
output2.innerHTML += "<br>Nuovo array di squadre<br>";
for(const squadra of nuovoArrayDiSquadre){
    output2.append(squadra.descrizione());
    output2.innerHTML += "<br>"
}

console.dir(arrayDiSquadre);
console.dir(nuovoArrayDiSquadre);
