//LIFE & callback
// 1. IIFE (Imendiately invoked function expression)
// a. No parm,args , & retrun value

(function (){
    console.log("hello world");
})();

// b. with params, args & retrurn value
let output = (function (fullName){
    return "hello" + fullName;
})("john doe");
console.log(output);

//c. 

function sayhello (callback) {
    callback();
}
sayhello(function (){
     console.log("hello world");
}) 

