let nomProduit          = "Clavier mécanique";
let prix                = 89.99;
let quantite            = 3;
let codePromo           = null;
let reductionPourcentage = 10;
let estMembre           = true;
let soldeCompte         = 250;


 
let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal + " MAD");




let reduction = 0;

if (codePromo !== null && estMembre === true) {
  reduction = sousTotal * (reductionPourcentage / 100);
}

console.log("Réduction : " + reduction + " MAD");




let totalFinal = sousTotal - reduction;
console.log("Total final : " + totalFinal + " MAD");



let statut = "";

if (soldeCompte >= totalFinal) {
  statut = "Paiement accepté";
} else {
  statut = "Solde insuffisant";
}

console.log(statut);




let nouveauSolde = soldeCompte; 

if (statut === "Paiement accepté") {
  nouveauSolde = soldeCompte - totalFinal;
  console.log("Nouveau solde : " + nouveauSolde + " MAD");
}


// Display the récapitulatif

console.log(" RECAPITULTIF");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " DH");
console.log("Sous-total: " + sousTotal + " DH");
console.log("Réduction : " + reduction + " DH");
console.log("Total     : " + totalFinal + " DH");
console.log("Statut    : " + statut);
console.log("Solde     : " + nouveauSolde + " DH");
