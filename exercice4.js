let compteur = 0;

// Pair 1
let egal1  = (0 == "");
let strict1 = (0 === "");
console.log('0 == ""  -> ' + egal1  + "   |   " + '0 === "" -> ' + strict1);
if (egal1 == true && strict1 == false) {
  compteur = compteur + 1;
}

// Pair 2
let egal2  = (0 == "0");
let strict2 = (0 === "0");
console.log('0 == "0" -> ' + egal2  + "   |   " + '0 === "0" -> ' + strict2);
if (egal2 == true && strict2 == false) {
  compteur = compteur + 1;
}

// Pair 3
let egal3  = (0 == false);
let strict3 = (0 === false);
console.log("0 == false  -> " + egal3  + "   |   " + "0 === false  -> " + strict3);
if (egal3 == true && strict3 == false) {
  compteur = compteur + 1;
}

// Pair 4
let egal4  = ("" == false);
let strict4 = ("" === false);
console.log('"" == false -> ' + egal4  + "   |   " + '"" === false -> ' + strict4);
if (egal4 == true && strict4 == false) {
  compteur = compteur + 1;
}

// Pair 5
let egal5  = (null == undefined);
let strict5 = (null === undefined);
console.log("null == undefined  -> " + egal5  + "   |   " + "null === undefined  -> " + strict5);
if (egal5 == true && strict5 == false) {
  compteur = compteur + 1;
}

// Pair 6
let egal6  = (null == false);
let strict6 = (null === false);
console.log("null == false  -> " + egal6  + "   |   " + "null === false  -> " + strict6);
if (egal6 == true && strict6 == false) {
  compteur = compteur + 1;
}

// Pair 7
let egal7  = (NaN == NaN);
let strict7 = (NaN === NaN);
console.log("NaN == NaN  -> " + egal7  + "   |   " + "NaN === NaN  -> " + strict7);
if (egal7 == true && strict7 == false) {
  compteur = compteur + 1;
}

// Pair 8
let egal8  = (1 == "1");
let strict8 = (1 === "1");
console.log('1 == "1"  -> ' + egal8  + "   |   " + '1 === "1"  -> ' + strict8);
if (egal8 == true && strict8 == false) {
  compteur = compteur + 1;
}

// Pair 9
let egal9  = (" \t\n " == 0);
let strict9 = (" \t\n " === 0);
console.log('" \\t\\n " == 0  -> ' + egal9  + "   |   " + '" \\t\\n " === 0  -> ' + strict9);
if (egal9 == true && strict9 == false) {
  compteur = compteur + 1;
}


console.log("---");

// result 
console.log(compteur + " paire ou == et === donnent des résultats différents");