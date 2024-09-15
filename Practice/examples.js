// Qs.1 Print all even number from 0 to 100 , and alos find how many even no are come in between 0 to 100?
// let count = 0;
// for(let i = 0; i <= 100; i++){
//     if( i %2 === 0) {  // even number formula
//         console.log(i);
//     count++;

//     }
// }
// console.log("Total no of even Number =" ,count);  // to find the total count of even number in between


// Qs.2 Print all number from 0 to 100. and also find total count of number in between 0 to 100


// let count = 0;  // for find the count of the numbers
// for( let i = 0 ; i <= 100 ; i++) {
//     console.log(i);
//     count++;
// } console.log("Total count in between 0 to 100 =", count);  // to print total count of the numbers.


// Qs.3 create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enter correct value.

//..............solution 1 by using if else condition......................

//  let num = prompt ("Enter any random game number in between 0 to 10.");
//  if( num == 9 ) {
//     console.log(num, "is the lucky game number");
//  }
//  else {
//     console.log(num, " is not a correct number please try diffrent number!")};

//..............solution 2 by using loop......................

let luckyNumber = 25;
let num = prompt("Enter a game number!!");
while (luckyNumber != num) {
    num = prompt("you have enterd wrong no try again!!");
}
console.log(num , "Congratulation you have entered lucky game number!!");

