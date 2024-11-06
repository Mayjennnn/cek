// javascript loop  

// array object

// let student = [
//     {
//         id:1,
//         firstName :"john",
//         grade : 80,
//     },
//     {
//         id : 2,
//         firstName : "jane",
//         grade : 90,
//     },
//     {
//         id :3,
//         firstName : "bob",
//         graade : 100,
//     },
// ];
// console.log(student);

// //1. for-loop
// for (let i=0; i < students.length; i++){
//     console.log(student[i].firstNamw);
// }

// //2. while-loop
// let  i = 0;
// while (i<student.length){
//     console.log (students[i].firstName);
//     i++;
// }

//3. do-while loop
// let i = 0;
// do {
//     console.log (students[i].firstNamee);
//     i++;   
// } while(i < student.length);

// //4. array build-in method
// // 4.a forEach()
// students.forEach(function (item){
//     console.log(item.firstName);
// });

// //4.b map()
// let output = students.map(function(tem){
//     return item.firstName;
// });
// console,log(output);


//4.c filter()
let outputFilter =  students.filter(function(item){
    return item.grade >= 90;

});
console.log(outputFilter);

//4.d find
let outputFind =  students.find(function(item){
    return item.grade >= 90;

});
console.log(outputFind);

//5.e findindex()
let outputfindindex = students.findindex(function(item){
    return item.firstName ==="Jane";
});
console.log(outputfindindex);





