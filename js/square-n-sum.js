/*
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let oneNum = numbers[i];
        let square = oneNum * oneNum;
        // console.log(oneNum);
        // console.log(square);
        sum+=square;
    }

    return sum;
}

console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);

// shorter from codewars

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }

// arrow function 

// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
//   }