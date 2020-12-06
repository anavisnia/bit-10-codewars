/*
SOURCE: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
*/

function digitize(n) {
    const string = n.toString();
    const split= string.split('');
    const reverse = split.reverse();
    const joinedNum = reverse.join('');
    const finalArr = Array.from(String(joinedNum), Number);
  
    return finalArr;
  }

console.log(digitize(35231),[1,3,2,5,3]);


// interesting answers from CODEWARS
/*

function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

*/