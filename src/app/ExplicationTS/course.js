//1-Types de données et déclarations de variables
var nom = "VotreNom";
var age = 30;
var PI = 3.14; //
var PASSWORD = "MTAPO"; //
nom = "Mintoua";
var etat = true; //false
if (etat) {
    console.log("true");
}
//2- Type tableaux
var tabNumber = [1, 2, 5, 8];
var tabNoms = ["Corine", "Toure", "Mintoua"];
var list = [1, 5, 89, 78];
//Tuple
var tuple = ["Toure", 27];
//3-Enum
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Verte"] = 1] = "Verte";
    Couleur[Couleur["Blue"] = 2] = "Blue";
    Couleur[Couleur["Orange"] = 3] = "Orange";
    Couleur[Couleur["Jaune"] = 4] = "Jaune";
})(Couleur || (Couleur = {}));
var chaussette = Couleur.Verte;
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Enseignant"] = 2] = "Enseignant";
    Role[Role["Etudiant"] = 3] = "Etudiant";
})(Role || (Role = {}));
var roleType = Role.Enseignant;
//4-Any
var pasSure;
//5-Void avec les fonctions/méthodes
function bonjour() {
    console.log("Bonjour Bienvenue");
}
bonjour();


///
