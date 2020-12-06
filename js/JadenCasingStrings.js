/*
SOURCE: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
*/

/*
ADDITIONAL INFO: https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
*/
const str = "How can mirrors be real if our eyes aren't real";

function toJadenCase (string) {
    let myString = str.split(' ');
    // console.log(string);
    for (let i = 0; i < myString.length; i++) {
        myString[i] = myString[i][0].toUpperCase() + myString[i].substr(1);
        // console.log(myString);
    }
    let finalStr = myString.join(' ');
    // console.log(finalStr);
    // console.log(typeof finalStr);
    
    return finalStr;
  };

console.log(toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

// codewars function logic
/*
String.prototype.toJadenCase = function () {
    let myString = this.split(' ');
    for (let i = 0; i < myString.length; i++) {
        myString[i] = myString[i][0].toUpperCase() + myString[i].substr(1);
    }
    let finalStr = myString.join(' ');

    
    return finalStr;
};
*/