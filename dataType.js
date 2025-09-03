// In JavaScript data types are divided into Primitive(value) and Non-Primitive(Reference) types.

//Primitive Data Types.

//Primitive data types are immutable(cannot be changed) and stored by value.

//1- String- Represents text.

let name = "Umar Ali";
console.log(typeof name); // string

//2- Number- Repersent integer and floating-point number;
let age = 35;
let price = 99.99;
console.log(typeof age, typeof price); //number

//3- BigInt- For very large Interger
let bigNum = 1234224354376878431343525657745n;
console.log(typeof bigNum); //bigint

//4- Boolean - Repersents true or false;
let isMarried = true;
console.log(typeof isMarried); //boolean

//5- Undefined- A veriable declared but not assigned a value.
let x;
console.log(typeof x); //undefined

//6- Null- Repersent intentional absence of value.
let emptyvalue = null;
console.log(typeof emptyvalue); //Object

//Symbol- Represents a unique and immutable value (often used as object key)
let id = Symbol("uniqueId");
console.log(id); //Symbol

//Non-Primitive (Reference) Data Types
//Non-primitive data types are mutable(can be changed) and stored by reference.

//1- Object- Collection of key-value pairs.
let person = {name:"Umar", age:30}
console.log(typeof person); //Object

//2-Array- Ordered collection of value(special type of object)
let number = [1, 2, 3, 4, 5];
console.log(typeof number); //Object

//3- Function - A block of reuseble code(also objects in javascript)
 let greet = function(){
    return "Hello World!";
}
console.log(typeof greet); //function


