
let nom    = null;
let age    = 0;
let ville  = "";
let score  = undefined;
let actif  = false;

// PARTIE A 


console.log(" Partie A : ?? ");

let nomA   = nom   ?? "valeur par defaut";
let ageA   = age   ?? "valeur par defaut";
let villeA = ville ?? "valeur par defaut";
let scoreA = score ?? "valeur par defaut";
let actifA = actif ?? "valeur par defaut";

console.log("nom   ?? 'valeur par defaut' -> " + nomA);
console.log("age   ?? 'valeur par defaut' -> " + ageA);
console.log("ville ?? 'valeur par defaut' -> " + villeA);
console.log("score ?? 'valeur par defaut' -> " + scoreA);
console.log("actif ?? 'valeur par defaut' -> " + actifA);

// PARTIE B 

console.log(" Partie B : || ");

let nomB   = nom   || "valeur par defaut";
let ageB   = age   || "valeur par defaut";
let villeB = ville || "valeur par defaut";
let scoreB = score || "valeur par defaut";
let actifB = actif || "valeur par defaut";

console.log("nom   || 'valeur par defaut' -> " + nomB);
console.log("age   || 'valeur par defaut' -> " + ageB);
console.log("ville || 'valeur par defaut' -> " + villeB);
console.log("score || 'valeur par defaut' -> " + scoreB);
console.log("actif || 'valeur par defaut' -> " + actifB);


// PARTIE C 
console.log(" Partie C : comparais ");

// nom
if (nomA === nomB) {
  console.log("nom   : ?? et || -> meme resultat");
} else {
  console.log("nom   : ?? et || -> resultat different");
}

// age
if (ageA === ageB) {
  console.log("age   : ?? et || -> meme resultat");
} else {
  console.log("age   : ?? et || -> resultat different");
}

// ville
if (villeA === villeB) {
  console.log("ville : ?? et || -> meme resultat");
} else {
  console.log("ville : ?? et || -> resultat difeerent");
}

// score
if (scoreA === scoreB) {
  console.log("score : ?? et || -> meeme reesultat");
} else {
  console.log("score : ?? et || -> resultat different");
}

// actif
if (actifA === actifB) {
  console.log("actif : ?? et || -> meme resultat");
} else {
  console.log("actif : ?? et || -> resultat diffrent");
}