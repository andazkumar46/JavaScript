// function greet(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greet("Alice"));




// function greet(name, callback) {
//     return callback(name);
// }

// function formalGreeting(name) {
//     return "Good evening, " + name + ".";
// }

// console.log(greet("Dave", formalGreeting));  // Output: "Good evening, Dave."



// function multiplyByTwo(n, callback) {
//     var result = n * 2;
//     callback(result);
//   }
  
//   function logResult(result) {
//     console.log(result);
//   }
  
//   multiplyByTwo(5, logResult);

// Example 1 non parameter function

// function add(){
//     let a = 12;
//     let b = 13;
//     let sum = a+b;
//     console.log("sum of a and b = ",sum);
    
// }
// add();

// Example - 2 paramter function

// function add(a,b){
//     let sum = a+b;
//     console.log('The sum of a and b =',sum);
// }
// add(22,23);


// function catagory
// 1. simple funtion (using by keywords)
// 2. Arrow function(using by the => )

    // Example 3 (by arrow function)

    // const show=()=>{
    //     console.log('Hello Guuys How are you ?');
    // }
    // show();

    // Example 4

    // const sum=(a,b)=>{
    //     let sum = a+b;
    //     return "The sum of a and b" +" = " +sum + " !!!" ;
    // }
    // console.log(sum(25,25));

    // immediate invoke function
    // self invoke/calling function

    // Example 5

    // (function name(){
    //     console.log('Andaz');
    // })();

    // Example 6

    // (function sum(a,b){
    //     let sum=a+b;
    //     console.log('The sum of a nad b =',sum);
    // })(12,123);

    // Example 7

    // function number(a,b){
    //     let c= a/b;
    //     document.getElementById('demo').innerHTML='The divison of the a and b = '+c;

    // } number(25,5);
    
    // Example 8

    // function marks(){
    //     return 'Hello student how are you ?'
    // }
    // document.getElementById('demo').innerHTML=marks();


    // Example 8

    // function marks(a,b){
    //     let c=a*b;
    //     return 'The Result will be = '+c;
    // }
    // document.getElementById('demo').innerHTML=marks(15,10);

    // Example 9

//     function parent(){
//         let a=9;
//         console.log('parent function',a);

//         function child(){
//             let b=10;
//             console.log('child function',b);
        
//         }
//         child();
//         // return 9;
        
//     }
//    console.log(parent());


// Example 10

// function parent(){
//     let a=9;
//     console.log('parent function',a);

//     function child(){
//         let b=10;
//         console.log('child function',b);
    
//     }
//     return child;
    
// }
// const a=parent();
// a();

// Example 11

function parent(){
    let a=9;
    console.log('parent function',a);

    function child(){
        let b=10;
        console.log('child function',b);
    
    }
    return child;
    
}
parent()();




