/* Source:
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
*/
// function howMuchILoveYou(nbPetals) {
//     // which phrase the girl would say for a flower of a given number of petals, where nb_petals > 0;
//     const phrases = ['I love you', 'a little', 'a lot', 'passionatelly', 'madly ', 'not at all'];
//     for(let i=0; i <= nbPetals.length; i++) {
//         phrases[i] = nbPetals[i];
//     }
//     return phrases;
// }

function howMuchILoveYou(nbPetals) {
    // which phrase the girl would say for a flower of a given number of petals, where nb_petals > 0;  
    if (nbPetals == 1 || nbPetals == 7) {
        return 'I love you';
    }
    if (nbPetals == 2) {
        return 'a little';
    }
    if (nbPetals == 3) {
        return 'a lot';
    }
    if (nbPetals == 4) {
        return 'passionatelly';
    }
    if (nbPetals == 5) {
        return 'madly';
    }
    if (nbPetals == 6) {
        return 'not at all';
    }

    return nbPetals;
}
// ciklas...for?

// const phrases = ['I love you', 'a little', 'a lot', 'passionatelly', 'madly ', 'not at all'];

// console.log(howMuchILoveYou(phrases));
// number of the petal, what is expected to be seen
console.log(howMuchILoveYou(7),"I love you");
console.log(howMuchILoveYou(3),"a lot");
console.log(howMuchILoveYou(6),"not at all");