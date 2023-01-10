// Daily Challenge: 99 Bottles Of Beer
var nombreBouteill = Number(prompt("Entrer des nombres: ")),
    comp = 0,
    rest = nombreBouteill
// 1. Invitez l'utilisateur à entrer un nombre pour commencer à décompter les bouteilles.
// 2. Dans la chanson, chaque fois qu'une bouteille tombe, le nombre soustrait doit augmenter de 1. Par exemple,
// 3. La chanson doit se terminer par "0 bouteille de bière sur le mur" ou "pas de bouteille de bière sur le mur".
// 4. Remarque : Assurez-vous que la grammaire est correcte.
//        Pour 1 bouteille, vous la faites passer.
//        Pour plus d'une bouteille, vous les faites passer. 
/* L'ensemble des bouteilles */
console.log(`We start the song at 99 bottles ${rest}`)
//Parcour rest de bouteilles
while (rest > 0) {
    comp++
    
    // si comp est superieur au rest, comp recupere la valeur de rest et on continu 
    if (comp > rest) comp = rest
    
    console.log(`->${rest} bottle${rest > 1 ? 's' : ''} of beer on the wall`)
    console.log(`->${rest} bottle${rest > 1 ? 's' : ''} of beer`)
    console.log(`->Take ${comp} down, pass ${(comp > 1 ? 'them' : 'it')} around`)
    // decremente 
    rest -= comp 
    // apres affiche le reste de bouteilles
    console.log(`->${(rest)} bottle${rest > 1 ? 's' : ''} of beer on the wall`)
    //Sauter une ligne 
    console.log("\n")
}