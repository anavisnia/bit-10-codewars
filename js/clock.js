/*
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
*/

/*
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59
*/

// function past(h, m, s){
//     //#Happy Coding! ^_^
//     let hMilS = 3600000;
//     let mMilS = 60000;
//     let sMilS = 1000;

//     let hAts = 0;
//     let mAts = 0;
//     let sAts = 0;

//     if (h <= 1 && h <= 23) {
//         if ( h === 0) {
//             hAts = 0;
//         } else {
//            hAts += hMilS;
//         }
//     }
//     if (m <= 1 && m <= 59) {
//         if ( m === 0) {
//             mAts = 0;
//         } else {
//             mAts += mMilS;
//         }
//     }
//     if (s <= 1 && s <= 59) {
//         if (s === 0) {
//             sAts = 0;
//         } else {
//            sAts += sMilS;
//         }
        
//     }

//     return hAts + mAts + sAts;

// }

// console.log(past(0,1,1),61000);
// console.log(past(1,1,1),3661000);
// console.log(past(0,0,0),0);
// console.log(past(1,0,1),3601000);
// console.log(past(1,0,0),3600000);

//!!! works only with value 1


function past(h, m, s){
    let miliseconds = 0;
    miliseconds = miliseconds + h * 3600000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + s * 1000;
    return miliseconds;
}

  console.log(past(0,1,1),61000);
  console.log(past(1,1,1),3661000);
  console.log(past(0,0,0),0);
  console.log(past(1,0,1),3601000);
  console.log(past(1,0,0),3600000);