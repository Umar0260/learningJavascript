/* implicit concersion (also called type coercion) happens when the javascript engine automatically
convert one data type to anothe data durning operation*/

//Example 

//String to number (in arithmetic)

console.log("5" - 2) //output 3
console.log("5" * 2) //10
console.log("5" / 2) //2.5

//Number to String (in concatenation)

console.log("5" + 2) //52
console.log("Hello " + true) //Hello true

// Boolean to Number
console.log(true + 1) //2
console.log(false + 1) //1

//Equality Comparison( == )
console.log(5 == "5") //true
console.log(true == 1) //true
console.log(false == 0) //true
console.log(null == undefined) //true

//Strict Equality( === ) No implicit Conversion
console.log(5 === "5") //false