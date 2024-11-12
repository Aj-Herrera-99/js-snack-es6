"use strict";
/**
Scrivere una funzione che accetti tre argomenti, 
un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori 
che hanno la posizione compresa tra i due numeri.
 */
// DOM elements selection
const output3 = document.getElementById("snack3");
const arr = [];
const len = 10;
const bound1 = 3;
const bound2 = 8;
for (let i = 0; i < len; i++) {
    arr.push(getRndInteger(1, 99));
}
const nuovoArr = insertInRange(arr, bound1, bound2);
output3.innerHTML = "Array:<br>";
for (const el of arr) {
    output3.innerHTML += el + " ";
}

if (nuovoArr.length) {
    output3.innerHTML += `<br>Nuovo array in range ${bound1}-${bound2}<br>`;
    for (const el of nuovoArr) {
        output3.innerHTML += el + " ";
    }
} else {
    output3.innerHTML += "<br>Nuovo array vuoto";
}
console.log(arr);
console.log(nuovoArr);


//! functions
/**
 *
 * @param {number[]} arr
 * @param {number} n1
 * @param {number} n2
 * @returns
 */
function insertInRange(arr, n1, n2) {
    if (n1 >= arr.length || n2 >= arr.length || n1 < 0 || n2 < 0) {
        return [];
    }
    let left, right;
    if (n1 < n2) {
        left = n1;
        right = n2;
    } else if (n1 > n2) {
        left = n2;
        right = n1;
    } else {
        return [];
    }
    const newArr = [];
    for (let i = left; i <= right; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
