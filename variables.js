//In javascript there are three tpes of variables

const PI= 3.14;  // containt constant value only.
var studenName = "Umar" // functional scope
let studentCity = "Delhi" // block scope
age = 30

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