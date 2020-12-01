/*
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
*/
function arrayPlusArray(arr1, arr2) {
    // return arr1 + arr2;
    let atsFromAr1 = 0;
    for (let i=0; i < arr1.length; i++) {
        atsFromAr1 += arr1[i];
    }
        console.log(atsFromAr1);
    let atsFromAr2 = 0;
    for (let i=0; i < arr2.length; i++) {
        atsFromAr2+=arr2[i];
    }
    console.log(atsFromAr2);
    return atsFromAr1 + atsFromAr2;
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), '->', 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), '->', -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), '->', 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), '->', 2100);