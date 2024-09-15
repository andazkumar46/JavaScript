// let str = "aeiou";
// function countVowels(str){

//     let count = 0;
//     for(let val of str){
//         if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
//             count ++;
//         }
    
//     }
//     return count;
// } 
// console.log(countVowels(str));


// by the arrow funtion

// const countVowels =(str) =>{
//     let count = 0;
//     for(let val of str){
//         if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("mango")); 


//..............ForEach Loop.......
// let arr = [2,3,4,5]
// arr.forEach( (val) =>{
//     console.log(val*); //val**2
// }

// );

// Q we are given array of marks of students. filter our of the marks of students that score 90+.

// let marks = [80, 85, 90, 92, 95, 99, 97 ,91]
// let newMarks = marks.filter((val) => {
//     return val > 90 ;
// });
// console.log(newMarks);

// Q. take a number n as input from user. Create an array of number from 1 to n.
// A. Use the reduce method to calculate sum of all number in the array.
// Use the reduce method to calculate the product of all number in the array.

// let  n = prompt("Enter the number to create an array");
// let arr = [];
// for(let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }
// console.log(arr); // array created

// soln for A
// let sum = arr.reduce((res , curr) =>{
//     return res + curr;
// })
// console.log("the sum of all number of array arr[] = " ,sum );

// soln for A
// let product = arr.reduce((res , curr) =>{
//         return res * curr;
//     })
//     console.log("the product of all number of array = ",product);


// const age = 15;
// const vote = age >= 18 ? "you can vote" : "you can't vote";
// console.log(vote);


//string 
// let first = "andaz";
// let middel = " Kumar";
// let last = " Yadav";
// let fullName = first.concat(middel).concat(last); /// we can use concat by + (first + middel+ last)
// console.log(fullName);

// let first1 = first.replace("a","A");
// console.log(`Fullname is = ${first1} ${middel} ${last}`);

// arr = [1,2,3,4,5]
// arr.forEach(element => {
//     return element;
// });
// console.log(element);



let arr = [2,4,3,5,19,8,9]
let sum = arr.reduce ( (x , y) => {
    return x+y;
})
console.log(`the sum of all element of the arr = ${sum}`);










  
  



  
