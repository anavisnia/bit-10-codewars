/*
SOURCE: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

additional info:
https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript 
    author: Srivastav
        if ( mynmb%2 == 0 ) { outtxt.value = "Even"; }  
        if ( Math.abs(mynmb%2) == 1 ) { outtxt.value = "Odd"; }
*/
function oddOrEven(array) {
    if (array.length === 0 ) {
        // if we have an emty array it should recognize it as evenm number (as if it is 0)
        return 'even';
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            // edge tests
            return 'even';
        } else if ( Math.abs(array[i] % 2) === 1 ) {
            // some negatives 
            return 'odd';
        }
    }
 }



 
 console.log('PASSED TESTS');

console.log('Edge tests -------');
console.log(oddOrEven([0]), '->', 'even');
console.log(oddOrEven([1]), '->', 'odd');
console.log(oddOrEven([]), '->', 'even');


console.log('------------------------------------');

console.log('Even tests -------');
console.log(oddOrEven([0, 1, 5]), '->', 'even');
console.log(oddOrEven([0, 1, 3]), '->', 'even');
console.log(oddOrEven([1023, 1, 2]), '->', 'even');

console.log('Odd tests -------');
console.log(oddOrEven([0, 1, 2]), '->', 'odd');
console.log(oddOrEven([0, 1, 4]), '->', 'odd');
console.log(oddOrEven([1023, 1, 3]), '->', 'odd');

console.log('Negative Even tests -------');
console.log(oddOrEven([0, -1, -5]), '->', 'even');
console.log(oddOrEven([0, -1, -3]), '->', 'even');
console.log(oddOrEven([-1023, 1, -2]), '->', 'even');


console.log('Negative Odd tests -------');
console.log(oddOrEven([0, -1, 2]), '->', 'odd');
console.log(oddOrEven([0, 1, -4]), '->', 'odd');
console.log(oddOrEven([-1023, -1, 3]), '->', 'odd');