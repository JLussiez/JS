//Fonction de l'exercice 1
function ex1() {

   var largeur;
   var longueur;
   var résultat;
   largeur = prompt("longeur en cm ?");
   largeur = parseFloat(largeur);
   longueur = prompt("largeur en cm ?");
   longueur = parseFloat(longueur);
   résultat = largeur * longueur;
   alert("l'aire du rectangle est de : " + résultat + " cm²");
   alert("Le périmètre est de : " + 2 * (Number(longueur) + Number(largeur)) + " cm");
}

//Fonction de l'exercice 2
function ex2() {

   var rayon = parseFloat(prompt("Entrez le rayon du cercle : "));
   var périmètre = parseFloat(prompt("Entrez la longueur"));
   alert("l'aire du cercle est de : " + 3.14 * (Number(rayon) * Number(rayon)) + " cm");
   alert("Le périmètre du cercle est de : " + Number(périmètre) * 2 * 3.14 + " cm²");
}

//Fonction de l'exercice 3
function ex3() {
   var a = 3;
   var b = 2;
   var x = 8;
   alert("Le résultat de la multiplication entre a et x est : " + x * a);
   alert("Le résultat de la multiplication entre b et x est : " + x * b);
   alert("La variable x est : " + x);
}

//Fonction de l'exercice 4
   var tab = [-2, 1, 4];

   function additionne4(x) {
      return (x + 2);
   }

   function affiche4() {
      alert(additionne4(tab[0]));
      alert(additionne4(tab[tab.length -1]));
   }

//Fonction de l'exercice 5
