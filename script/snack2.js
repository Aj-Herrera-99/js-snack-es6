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
// Creazione oggetti squadra
const squadra1 = {
    nome: "Milan",
    punti: 0,
    falli: 0,
}
const squadra2 = {
    nome: "Inter",
    punti: 0,
    falli: 0,
}
const squadra3 = {
    nome: "Juventus",
    punti: 0,
    falli: 0,
}
const squadra4 = {
    nome: "Napoli",
    punti: 0,
    falli: 0,
}
const squadra5 = {
    nome: "Roma",
    punti: 0,
    falli: 0,
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
        falli: squadra.falli
    }
    nuovoArrayDiSquadre.push(nuovaSquadra);
}
// output
console.dir(arrayDiSquadre);
console.dir(nuovoArrayDiSquadre);

//! functions
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}