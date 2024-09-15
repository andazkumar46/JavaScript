// let marks = [97 , 65 , 85 , 90 , 76];
// console.log(marks);
// console.log(marks.length);

// Qs.1 for a given array with marks of students -> [85, 97, 44, 38, 76, 60] find the average marks of the entire class.

//..................method 1.............
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let i = 0 ; i< marks.length ; i++) {
//     sum = sum + marks[i];      //sum = 399
// }
// let avgmarks = sum/marks.length;  //avgmarks = 79.8
// console.log("the average marks of the class = ", avgmarks);  // the average marks of the class = 80


//..................method 1.............

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let val of marks){
//     sum += val;  //sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`total marks of the class = ${sum}`);
// console.log(`avwrage marks of class =  ${avg}`);


// let price = [250, 645, 300, 900, 50];  //price length 5
// for(let i = 0; i < price.length; i++){
//     let offer = price[i] /10;
//     price[i] -= offer;
// }
// console.log(price);


// push() operator

// let num = [76, 72, 57, 60, 80];
// num.push(86);

// console.log(num);


// pop() operator

// let foodItem = ["orange", "banana", "tomato", "cucumber", "litchi"];
// console.log(foodItem);


// to make string of any type of arrays
// let arr = [1,2,3,4,5,6];
// console.log(arr);
// let newarr = arr.toString(); // method to cnovert in the array
// console.log(arr.toString());


// ................................................Array Method...................................

// "concat" method......it use to joins the multiple array & return result

// let num1 = [1,2,3,4,5];
// console.log(num1);
// let num2 = [6,7,8,9];
// console.log(num2);

// // numFinal = num1.concat(num2);
// // console.log(numFinal);
// console.log(num1.concat(num2));

// ................unshift method ...........
// use  .unshift()
// arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// // let num = arr.unshift(0); // use this method or use the second metod in between the console.log
// console.log(arr.unshift(0));
// console.log(arr);

// ................shift method ...........

// arr = [1,2,3,4,5,6,7,8,9];
// // method 1
// // console.log(arr);
// // console.log(arr.shift());
// // console.log(arr);

// // method 2
// console.log(arr);
// let newarr = arr.shift();
// console.log(newarr);
// console.log(arr);


// ...........slice method...........
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]  // total index = (0-16)
// console.log(arr.slice(4,10));

// ...........splice method........... this method are to use to add new array in between the array

// let arr = [1,2,3,4,5,6];
// arr.splice(1,0,11,12,13); // to use more arry from selected position
// console.log(arr); // output [1,11,12,13,3,4,5,6]

// let arr = [1,2,3,4,5,6,7,8,9];
// arr.splice(2,2,11,12,13,14); //to replace and more array in between the array
// console.log(arr); // output [1,2,11,12,13,14,5,6,7,8,9]



// Qs. Creat an arry to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".
// a. Remove the first comapany from the array.
// b. Remove Uber & Add Ola in its place.
// c. Add Amazon at the end.

let companies = [ "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// solution of a
// console.log(companies);
// console.log(companies.shift());
// console.log(companies);

// solution of b.
// console.log(companies);
// console.log(companies.splice(2, 1, "Ola"));
// console.log(companies);

// solution of c.
console.log(companies);
console.log(companies.push("Amazon"));
console.log(companies);











