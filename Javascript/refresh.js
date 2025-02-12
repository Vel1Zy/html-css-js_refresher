var name = "Wingerz"; // This is the old way
let age_x = 25; // Block-scoped
const pi = 3.14; // Constant - Cannot be changed

//primitive data type
let str = "Hello, World!!!" // String
let num = 10;               // Number
let isTrue = true;          // Boolean
let value = null;           // Null (empty value)
let x;                      // Undefined (not assigned)
let sym = Symbol();         // Symbol (unique value)

// Objects
let person = { name: "Alic", age: 22 }; // Object
const car_1 = { brand: "BMW", model_name: "BMW M4 Competition G82", model_year: 2024 };
let numbers = [1, 2, 3, 4] // Array


// Basic Operators
// Arithmetic
let a = 10, b = 5;
console.log(a + b);  // Addition
console.log(a - b);  // Substraction
console.log(a ** b);  // Exponentiation 
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulus

// Comparison Operators
console.log(10 > 5); // more than
console.log(10 < 5); // less than
console.log(10 == 5); // equals to (loose)
console.log(10 === 5); // equals to (strict)
console.log(10 !== 5); // not equal to

// Logical Operators
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true);         // NOT (Negasi)

//CONTROL FLOW
// Conditional Statement
let age = 18;
if (age >= 18){
    console.log("You are an Adult.");
} else {
    console.log("You are a minor.");
}

// Ternary (Best way to use if-else :DDD)

let result = age >= 18 ? "Adult" : "Minor";
console.log("Result from ternary operator = "+result);

// Switch Statement
let fruit = "Apple";
switch(fruit) {
    case "apple":
        console.log("It's a fake apple!! ");
        break;
    case "Apple":
        console.log("It's the real Apple!! ");
}

let cc = 0;
let counter = 1000;
do{
    counter = 1000;
    do {
        console.log("Hello World");
        counter++;
    }while(counter<5000);
    console.log("current Counter: "+counter);
cc++;
console.log("current cc: "+cc);
cc;
}while(cc<10);

// function declaration
function greet(name){
    return "Hello, " + name;
}
console.log(greet("Alice"));

const greetArrowFunction = (name) => `Hello, ${name}`;
console.log(greetArrowFunction("Bob"));

// Swapping Value
let ax = "100";
let bx = 50;

function swap(a, b){
    let temp = a;
    a = b;
    b = a;
    return
}
console.log('a = '+ax);
console.log('b = '+bx);

console.log('after swappp');
swap(ax,bx);

console.log('a = '+ax);
console.log('b = '+bx);




