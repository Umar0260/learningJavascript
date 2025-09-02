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