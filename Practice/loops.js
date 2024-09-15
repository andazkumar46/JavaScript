//.................................. FOR Loop .............................
// Qs.1 to print 5 times 
// for(let i=1; i<=5; i++ ) {
//     console.log("Hii Andaz How are You ?" );
//    }
  
// Qs.2 how to print sum of n nos.

// let n = prompt("Enter the Value of n which you want to add") // if you want to take input by user other wise put the value of n
// let sum = 0 ;
// for( let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("loop has been ended");


//..................................... While Loop .........................

// let sum = 0;
// let i=1;
// while( i<=5 ) {
//     sum = sum + i;
//     i++;
// }
// console.log("sum =" , sum );

// if we need for sum of n nos and n will come from the user
// let num = prompt("Enter the value of num")
// let sum = 0;
// let i=1;
// while( i<=num ) {
//     sum = sum + i;
//     i++;
// }
// console.log("sum =" , sum );



//...................................... do while loop ........................

// let i = 1;
// do{
//     console.log("Hii Andaz");
//     i++;
// } while(i<=5);

//.........................................For Of ..............................

// let str = "andazKumar";
// let size =0;
// for(let val of str) {
//     console.log("val =" , val);
//     size++;
// }
// console.log("size of str =",size); 


//.........................................For in ..............................

let student = {
    fullName: "Andaz KUmar",
    age: 26,
    CGPA: 8.83,
    isPass: true,
}
for(let key in student){
    console.log("key = ", key , "value= ", student[key]);
}