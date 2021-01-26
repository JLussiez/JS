function ex1(){

var largeur;
var longueur;
var résultat;
largeur = prompt("longeur en cm ?");
largeur = parseFloat(largeur);
longueur = prompt("largeur en cm ?");
longueur = parseFloat(longueur);
résultat =largeur*longueur;
alert("l'aire du rectangle est de :"+résultat+"cm²");
alert("Le périmètre vaut :"+2*(Number(longueur)+Number(largeur)));
}