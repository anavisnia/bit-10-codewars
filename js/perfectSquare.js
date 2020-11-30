/*
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript
*/
// function getRoot() {
//     return Math.SQRT2;
// }

// function isSquare(n) {
//     // const squareNum = n * n;
//     // const checkDec = /^[-+]?[0-9]+\.[0-9]+$/;
//     // let validNum = getRoot();

//     // if (validNum == checkDec) {
//     //     return false;
//     // } else {
//     //     return true;
//     // }
//     if (n < 0) {
//         return false;
//     }
//     return getRoot % 1 === 0;

//   }


//  console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//  console.log(isSquare( 0), true, "0 is a square number (0 * 0)");
//  console.log(isSquare( 3), false, "3 is not a square number");
//  console.log(isSquare( 4), true, "4 is a square number (2 * 2)");
//  console.log(isSquare(25), true, "25 is a square number (5 * 5)");
//  console.log(isSquare(26), false, "26 is not a square number");


// FROM CODEWARS

 function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }
  console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
  console.log(isSquare( 0), true, "0 is a square number (0 * 0)");
  console.log(isSquare( 3), false, "3 is not a square number");
  console.log(isSquare( 4), true, "4 is a square number (2 * 2)");
  console.log(isSquare(25), true, "25 is a square number (5 * 5)");
  console.log(isSquare(26), false, "26 is not a square number");