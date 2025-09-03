/*In JavaScript, operators are special symbol used to perform operaions on values(operands).
 We can manipulate data, perform calculations, campae values, and control logics */

 //1- Arithmetic Operators.
 // Used for mathmeticals calculation.
 let a = 10, b=3;
 console.log(a + b); //addition - 13
 console.log(a - b); // 7
 console.log(a * b); //30
 console.log(a / b); //3.333
 console.log(a % b); //1
 console.log(a ** b); //1000
 console.log(++a); //11
 console.log(--b); //2

 //2- Assignment Operators
 // Assign value to variables.
 let x=5;
 console.log(x += 2); //7
 console.log(x -= 1); //6
 console.log(x *= 3); //18
 console.log(x /= 2); //9
 console.log(x %= 4); //1
 console.log(x **= 2); //1

 //3- Comparison Operators
 //compare value and return true or false.
 console.log(5 == "5"); //true
 console.log(5 === "5"); //false
 console.log(5 != "5"); //false
 console.log(5 !== "5"); //true
 console.log(7 > 3); //true
 console.log(7 < 3); //false
 console.log(7 >= 7); //true
 console.log(7 <= 6); //false

 //4- Logical Operators
 //Used in Conditions.

 let p = true, q = false;
 console.log(p && q); //flase
 console.log(p || q); //true
 console.log(!p); //false

 // 5-Ternary Operators
 // Shourtcut for if...else
let age=20;
 let result = (age >= 18) ? "Adult" : "Minor";
 console.log(result);
