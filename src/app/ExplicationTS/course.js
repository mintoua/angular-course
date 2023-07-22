/*
//1-Types de données et déclarations de variables
let nom: string = "VotreNom";
let age: number = 30;
const PI: number = 3.14; //
const PASSWORD: string = "MTAPO"; //
nom = "Mintoua";
let etat: boolean = true; //false
if(etat){
  console.log("true")
}

//2- Type tableaux
let tabNumber: number[] = [1,2,5,8];
let tabNoms: string[] = ["Corine", "Toure", "Mintoua"];
let list: Array<number> = [1,5,89,78];
//Tuple
let tuple: [string, number] = ["Toure", 27];

//3-Enum
enum Couleur{
  Rouge,
  Verte,
  Blue,
  Orange,
  Jaune
}
let chaussette: Couleur = Couleur.Verte;

enum Role{
  User, Admin, Enseignant,Etudiant
}

let roleType: Role = Role.Enseignant

//4-Any
let pasSure: any;

//5-Void avec les fonctions/méthodes

function bonjour(): void{
  console.log("Bonjour Bienvenue")
}
bonjour()
*/
//séance 1
//Strcuture conditionnelles en Typescript
var age = 18;
if (age >= 18) {
    console.log("majeur");
}
else if (age < 18) {
    console.log("mineur");
}
var message = age >= 18 ? "majeur" : "mineur";
console.log(message);
//boucle 'for'
/*
for(let i=0; i < 5; i++){
  console.log(i)
}
*/
/*
let i = 0;
while (i<5){
  console.log(i)
  i++;
}
*/
/*let i = 0;
do{
  console.log(i)
  i++;
}
while (i<5)*/
/*let choix=0;
switch (choix){
  case 0:
    console.log("0")
    break;
  case 1:
    console.log('1')
    break;
}*/
/*
let noms: string[] = ['pomme', 'orange', 'banane'];

noms.forEach((nom: string) =>{
  console.log(`${nom}`)
})
*/
//interface
/*interface Produit{
  nom: string;
  prix: number;
}

let product: Produit={nom: "Sac", prix:15};
console.log(product)*/
var Produit = /** @class */ (function () {
    function Produit(nomP, prixP) {
        this.nom = nomP;
        this.prix = prixP;
    }
    Produit.prototype.afficheerProduit = function () {
        console.log("prix: " + this.prix + "nom: " + this.nom);
    };
    return Produit;
}());
var product = new Produit("sac", 15);
product.afficheerProduit();
