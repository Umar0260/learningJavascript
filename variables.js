//In javascript there are three tpes of variables

const PI= 3.14;  // containt constant value only.
var studenName = "Umar" // functional scope
let studentCity = "Delhi" // block scope
age = 30 //globle window scope

console.table([PI, studenName, studentCity, age])

// Exxample of the functional scope.
function functionalScope(){
    if(true){
        var  course= "Javascript Learning";
    }
    console.log(course);
}
functionalScope();


//Example of the block Scope.
function blockScope(){
    if(true){
        let  course= "Javascript Learning"; // can't use let variable out side the block
        console.log(course);
    } 
}
blockScope();

/*If a const variable hold an object then be can modefied the object value but can't reassign the 
the const veriable.*/

// example

const user = {name : "Umar", age : 25};
user.name = "Umar Ali";
user.age = 30;
user.city = "Mumbai";
console.log(user);

/* Ressignment is not allowed in the const veriable */

//Example:- user = {name:"Umar Ali"}

/*-------------------------------------------------------------*/

// Redeclaration concept of veriables.

/* With var we can redeclare the same variable in the same scope JavaScript will not throw 
any kind of error it just overwrites silently. */

// Example
var x = 10;
var x = 20; //output 20
console.log(x);

/* with the let & const we can not redeclare the variable in the same scope*/

//Example
// let y = 30;
// let y = 40; Error throw identifire has already been declare

// //or 

// const z = 50;
// const z = 60; Error throw identifire has already been declare

// let and const has block scope so that we can declare them in the differnt block