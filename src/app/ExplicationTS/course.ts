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
