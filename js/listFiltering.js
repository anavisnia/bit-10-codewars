/*
SOURCE: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
*/

// function filter_list(l) {
    // Return a new array with the strings filtered out
    // let newArr = [];
    // for (let i = 0; i < l.length; i++) {
    //   if (typeof l[i] === 'string') {
    //     return false;
    //   }
    //   if (typeof l[i] === 'number') {
    //     newArr += l[i];
    //     }
    //   }
// }

/*
-----------------------------------------------------
*/
// let newArr = [];

function filter_list(l) {
    // Return a new array with the strings filtered out
        let newArr = [];
        for (let i = 0; i < l.length; i++) {
            if (typeof l[i] === 'number') {
                let oneNum = l[i];
                // console.log(oneNum);
                // newArr += oneNum; // wrong
                newArr.push(oneNum);
            }
        }
        
        // return true;
        return newArr;
    }


console.log(filter_list([1,2,'a','b']), '->', [1,2]);
console.log(filter_list([1,'a','b',0,15]), '->', [1,0,15]);
console.log(filter_list([1,2,'aasf','1','123',123]), '->', [1,2,123]);