"use strict";
/**
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

// Dichiarazione oggetti bici
const bici1 = {
    nome: "bici1",
    peso: 12,
    descrizione: function () {
        console.log("nome: " + this.nome + " peso: " + this.peso);
    },
};

const bici2 = {
    nome: "bici2",
    peso: 15,
    descrizione: function () {
        console.log("nome: " + this.nome + " peso: " + this.peso);
    },
};

const bici3 = {
    nome: "bici3",
    peso: 18,
    descrizione: function () {
        console.log("nome: " + this.nome + " peso: " + this.peso);
    },
};

const bici4 = {
    nome: "bici4",
    peso: 22,
    descrizione: function () {
        console.log("nome: " + this.nome + " peso: " + this.peso);
    },
};

const bici5 = {
    nome: "bici5",
    peso: 10,
    descrizione: function () {
        console.log("nome: " + this.nome + " peso: " + this.peso);
    },
};

const listaBici = [bici1, bici2, bici3, bici4, bici5];
console.log(listaBici);

