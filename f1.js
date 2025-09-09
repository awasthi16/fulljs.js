// Storage in JavaScript

// Local Storage
// Stores data in the browser with no expiration time.
// Data persists even after the browser is closed and reopened.

// // Set item
// localStorage.setItem("username", "John");

// // Get item
// let user = localStorage.getItem("username");
// console.log(user); // John

// // Remove item
// localStorage.removeItem("username");

// // Clear all data
// localStorage.clear();
// -----------------------------------------------------------------------------------
// session storage
// Stores data for one session only.
// Data is cleared when the tab or browser is closed.
// Set item
// sessionStorage.setItem("sessionUser", "Alice");

// // Get item
// let sessionUser = sessionStorage.getItem("sessionUser");
// console.log(sessionUser); // Alice

// // Remove item
// sessionStorage.removeItem("sessionUser");

// // Clear all session data
// sessionStorage.clear();

// --------------------------------------------------------------------------------------------

// Cookies
// Can be used for storing small data (like authentication tokens).
// Has an expiration time.
// Sent to the server with every request.

// import React from "react";
// import Cookies from "js-cookie";

// const CookieExample = () => {
//   const handleSetCookie = () => {
//     Cookies.set("username", "JohnDoe", { expires: 7 }); // 7 days
//   };

//   const handleGetCookie = () => {
//     alert(Cookies.get("username"));
//   };

//   const handleDeleteCookie = () => {
//     Cookies.remove("username");
//   };

//   return (
//     <div className="p-4">
//       <button onClick={handleSetCookie}>Set Cookie</button>
//       <button onClick={handleGetCookie}>Get Cookie</button>
//       <button onClick={handleDeleteCookie}>Delete Cookie</button>
//     </div>
//   );
// };

// export default CookieExample;
// ---------------------------------------------------------------------------------------------------------------


// 1
// <!DOCTYPE html>
// <html>
// <head>
//   <title>JavaScript Example</title>
// </head>
// <body>
//   <h1 id="demo">Hello!</h1>

//   <script>
//     document.getElementById("demo").innerHTML = "Hello from JavaScript!";
//   </script>
// </body>
// </html>
// -------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------

// What is Hoisting?


// console.log(x); // undefined
// var x = 5;
// --------------------------------------------------------------------------------------
//clouser
// function outer() {
//     let counter = 0;
//     function inner() {
//       counter++;
//       console.log(counter);
//     }
//     return inner;
//   }
  
//   const myFunc = outer();
//   myFunc(); // 1
//   myFunc(); // 2
//   myFunc(); // 3

// --------------------------------------------------------------------
// data type

// console.log(typeof "Hello");     // string  
// console.log(typeof 123);         // number  
// console.log(typeof true);        // boolean  
// console.log(typeof null);        // object ❗ (this is a JS bug from early days)  
// console.log(typeof undefined);   // undefined  
// console.log(typeof Symbol());    // symbol  
// console.log(typeof 100n);        // bigint




// --------------------------------------------------------------------------------------
// 🔸 5. String Concatenation Operator
// let first = "Hello";
// let second = "World";
// console.log(first + " " + second); // Hello World


// ----------------------------------------------------------------------------------------------------------
// ternary

// let age = 18;
// let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result); // Adult


// ----------------------------------------------------------------------------------------------------
// 1. Implicit Type Conversion (Automatic by JS)
// console.log("5" + 2);   // "52" → number 2 converted to string → string concatenation
// console.log("5" - 2);   // 3   → string "5" converted to number
// console.log("5" * 2);   // 10  → string "5" converted to number
// console.log("5" / 2);   // 2.5
// console.log("5" == 5);  // true → "5" converted to number
// console.log(null + 5);  // 5   → null becomes 0
// console.log(undefined + 5); // NaN → undefined cannot be converted to number
// ----------------------------------------------------------------------------------------------------------------



// 2. Explicit Type Conversion (Manual by developer)
// Number("123");       // 123
// Number("abc");       // NaN
// Number(true);        // 1
// Number(false);       // 0
// Number(null);        // 0
// Number(undefined);   // NaN
// let x = +"123";      // 123 → unary `+` operator converts to number


// ------------------------------------------------------------------------
// console.log(null == 0);      // false
// console.log(null >= 0);      // true → tricky coercion
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false




//---------------------------------------------------------------------------


// let person = {name: ["ram","sita"], age: 25};
// for (let key in person) {
//   console.log(key, person[key]);   
// }

// let colors = ["red", "green", "blue"];
// for (let x of colors) {
//   console.log(x);
// }




//-----------------------------------------------------------------------------------------
// function
// const greet = (name) => {
//     console.log("Hello, " + name);
//   };
//   greet("Mark");


// const sayHello = () => console.log("Hi!");

// -------------------------------------------------------------------------
//default perameter





// -------------------------------



// function greet(name = "Guest") {
//     console.log("Hello, " + name);
//   }
//   greet(); // Hello, Guest

// -------------------------------------------------------------

// 🔸 Rest Operator (...)
// Used to group multiple arguments into an array.
// function sum(...numbers) {
//     return numbers.reduce((acc, val) => acc + val, 0);
//   }
//   console.log(sum(1, 2, 3, 4)); // 10
  
// ---------------------------------------------------------------------------
// 🔸 Spread Operator (...)
// Used to spread values of arrays/objects.
// let arr1 = [1, 2];
// let arr2 = [arr1, 3, 4];
// console.log(arr2); // [1, 2, 3, 4]

// let obj1 = { a: 1 };
// let obj2 = { ...obj1, b: 2 };
// console.log(obj2); // { a: 1, b: 2 }


// -------------------------------------------------------------------------------------
// 🔸 Callback Functions
// A callback is a function passed as an argument to another function and called later.
// function greetUser(name, callback) {
//     console.log("Hello, " + name);
//     callback(); // This will call the sayBye function
//   }
  
//   function sayBye() {
//     console.log("Goodbye!");
//   }
  
//   greetUser("Sam", sayBye);



// ------------------------------------------------------------------------------------------------
// 🔸 Higher-Order Functions
// Functions that take other functions as arguments or return a function.

// function calculate(a, b, operation) {

 
//     return operation(a, b);
//   }
  
//   function add(x, y) {
//     return x + y;
//   }
  
//   console.log(calculate(5, 3, add)); // 8


//   ------------------------------------------------------

//    9. Nullish Coalescing & Optional Chaining
// Operator	Description	Example
// ??	Nullish coalescing (if null or undefined)	a ?? "default"
// ?.	Optional chaining (safe property access)	user?.name 




// --------------------------------------------------------------------------------
//  IIFE (Immediately Invoked Function Expression)
// A function that runs immediately after it's defined.

// (function() {
//     console.log("IIFE executed!");
//   })();
  

//   (() => {
//   console.log("Arrow IIFE executed!");
// })();



// ----------------------------------------------------------------------------------------
// let fruits = ["apple", "banana", "mango"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = [1, "hello", true, null];



//------------------------------------------------------------------------------

// You can also create an array using the constructor:
// let cars = new Array("BMW", "Tesla", "Audi");


// console.log(fruits[0]); // apple
// console.log(fruits[2]); // mango
// fruits[1] = "grapes";
// console.log(fruits); // ["apple", "grapes", "mango"]



// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//   }

  
//   for (let fruit of fruits) {
//     console.log(fruit);
//   }
  


// ✅ JavaScript Arrays: All Common Methods & Functions in One File

// Create Arrays
// let fruits = ["apple", "banana", "mango"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = [1, "hello", true, null];
// let nested = [[1, 2], [3, 4]];

// // Access and Modify Elements
// console.log(fruits[0]); // apple
// fruits[1] = "grapes";
// console.log(fruits);

// Length of Array
// console.log(fruits.length);

// // Add/Remove Elements
// fruits.push("orange");
// fruits.pop();


// fruits.unshift("kiwi");

// fruits.shift();

// // Check Existence
// console.log(fruits.includes("mango"));
// const text = "JavaScript is awesome";

// console.log(text.includes("Java"));     // true
// console.log(text.includes("script"));   // false (case-sensitive)
// console.log(text.includes("is", 5));    // true


// const colors = ["red", "green", "blue", "yellow"];

// console.log(colors.includes("green"));  // true
// console.log(colors.includes("purple")); // false
const arr1=[2,3,4,5]
const y=arr1.map((item)=>item*3)
console.log(y)


// const arr1 = ["apple", "banana", "cherry"];
// const arr2 = ["banana", "grape", "cherry"];
const num=[2,3,4,5,6,7]
const f=num.filter((item)=>item>5)

console.log(f)

const common = arr1.filter(item => arr2.includes(item));

// console.log(common); // ["banana", "cherry"]


// const arr1 = ["apple", "banana", "cherry"];
// const arr2 = ["banana", "grape"];

// const hasCommon = arr2.some(item => arr1.includes(item));

// console.log(hasCommon); // true (because "banana" is in both)




// console.log(fruits.indexOf("apple"));

// Combine Arrays
// let moreFruits = ["papaya", "pear"];
// let allFruits = fruits.concat(moreFruits);

// const arr=[1,2]
// const newar=[...arr,...fruits]
 // console.log(newar)


// // Slice & Splice
// let sliced = fruits.slice(1, 3);
// console.log(sliced)
// fruits.splice(1, 1, "pineapple", "guava");

// Reverse & Sort
// let reversed = [...fruits].reverse();
// let sorted = [...fruits].sort();

// // Spread Operator
// let copyFruits = [...fruits];
// let combined = [...fruits, ...moreFruits];

const a1=["ram","seeta","geeta","radha"]
// // Looping
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

// // map()
// let squared = numbers.map(num => num * num);

// filter()
// let evens = numbers.filter(num => num % 2 === 0);

// // reduce()
// let total = numbers.reduce((sm, item) => sm + item, 0);


// // find()
// let found = numbers.find(num => num ==1);
// console.log(found)

// // findIndex()
// let foundIndex = numbers.findIndex(num => num === 3);

// // every() & some()
// let allPositive = numbers.every(num => num > 2);
// let hasEven = numbers.some(num => num ===2);
// console.log(allPositive)


// flat()
// let deepArray = [1, [2, [3, 4]]];
// let flatArray = deepArray.flat(1); 
// console.log(flatArray)

// // from() & of()
// let fromStr = Array.from("hello");

// const ar=[1,2,3,4,5]
// let ofArray = Array.of(1, 2, 3);

// // fill()
// let filledArray = new Array(5).fill("meghraj");
// console.log(filledArray)

// // keys(), values(), entries()
// let keys = [...fruits.keys()];
// let values = [...fruits.values()];
// let entries = [...fruits.entries()];

// toString(), join()
// console.log(fruits.toString());
// console.log(fruits.join(" | "));

// // Nested Array Access
// console.log(nested[1][0]); // 3

// // Summary Output
// console.log({
//   fruits,
//   numbers,
//   mixed,
//   nested,
//   sliced,
//   reversed,
//   sorted,
//   copyFruits,
//   combined,
//   squared,
//   evens,
//   total,
//   found,
//   foundIndex,
//   allPositive,
//   hasEven,
//   flatArray,
//   fromStr,
//   ofArray,
//   filledArray,
//   keys,
//   values,
//   entries
// });
// ----------------------------------------------------------------------------------------------
// 1. Object Literals
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
//     isStudent: false
//   };


// const product={
//   name:"laptop",
//   price:1000,
//   qty:10
// }





  
//   🔸 2. Accessing Properties
//   console.log(person.age);       // Dot notation → "Alice"
// console.log(person["age"]);     // Bracket notation → 25

// 🔸 3. Adding / Updating / Deleting Properties
// person.country = "USA";         // Add
// person.age = 26;                // Update
// delete person.isStudent;        // Delete

// 4. Object Methods
// const user = {
//     name: "Bob",
//     greet: function() {
//       return `Hello, ${this.name}`;
//     }
//   };
//   console.log(user.greet()); // Hello, Bob

  // 🔸 5. Shorthand Method Definition (ES6)
  // const obj = {
  //   name: "Sam",
  //   greet() {
  //     return `Hi, ${this.name}`;
  //   }
  // };

//   🔸 6. Nested Objects
  // const student = {
  //   id: 101,
  //   details: {
  //     name: "Meera",
  //     grade: "A"
  //   }
  // };
  // console.log(student.details.name); // Meera

//   🔸 7. Object.keys(), Object.values(), Object.entries()
//   const car = { brand: "Toyota", model: "Innova", year: 2020 };

// console.log(Object.keys(car));     // [ 'brand', 'model', 'year' ]
// console.log(Object.values(car));   // [ 'Toyota', 'Innova', 2020 ]
// console.log(Object.entries(car));  // [ [ 'brand', 'Toyota' ], ... ]


// 9. Spread Operator for Objects
// const base = { x: 10, y: 20 };
// const extended = { ...base, z: 30 }; // { x:10, y:20, z:30 }

// 🔸 10. Destructuring Objects

// const userDetails = {
//     name: "Amit",
//     age: 28,
//     country: "India"
//   };
  
//   const { name, country } = userDetails;
//   console.log(name, country); // Amit India

//   🔸 11. Destructuring Nested Objects


//   const emp = {
//     id: 201,
//     info: {
//       fullName: "Sara",
//       dept: "HR"
//     }
//   };
  
//   const { info: { fullName, dept } } = emp;
//   console.log(fullName, dept); // Sara HR
//   🔸 12. Destructuring Arrays
//   const colors = ["red", "green", "blue"];
// const [c1, c2] = colors;
// console.log(c1, c2); // red green

  


  
  
//   -----------------------------------------------------------------------------------------------------------------------------
// // ✅ Object Literals
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     isStudent: false,
//     greet: function() {
//       return `Hello, my name is ${this.name}`;
//     }
//   };
  
//   // ✅ Dot & Bracket Notation
//   console.log(person.name); // Dot Notation
//   console.log(person["age"]); // Bracket Notation
  
//   // ✅ Adding/Updating/Deleting Properties
//   person.email = "john@example.com";
//   person.age = 31;
//   delete person.city;
  
//   // ✅ Object Methods
//   console.log(person.greet());
  
//   // ✅ Object.keys(), Object.values(), Object.entries()
//   console.log(Object.keys(person));
//   console.log(Object.values(person));
//   console.log(Object.entries(person));
  
//   // ✅ Object.assign() – Merge Objects
//   const address = { city: "LA", country: "USA" };
//   const updatedPerson = Object.assign({}, person, address);
  
//   // ✅ Object Spread Syntax (ES6)
//   const newPerson = { ...person, state: "California" };
  
//   // ✅ Destructuring Objects
//   const { name, age, isStudent } = person;
//   console.log(name, age, isStudent);
  
//   // ✅ Destructuring Arrays
//   const colors = ["red", "green", "blue"];
//   const [firstColor, secondColor] = colors;
//   console.log(firstColor, secondColor);
  
//   // ✅ Nested Object Destructuring
//   const student = {
//     id: 101,
//     info: {
//       fullName: "Alice",
//       grade: "A"
//     }
//   };
  
//   const {
//     info: { fullName, grade }
//   } = student;
  
//   console.log(fullName, grade);
  


// ------------------------------------------------------------------------------
// let str1 = "Hello World";      // Double quotes
// let str2 = 'Hello World';      // Single quotes
// let str3 = `Hello World`;      // Backticks (Template Literals)


//// JavaScript String All Functions and Methods - Complete Reference

// let str = "  Hello JavaScript World  ";

// // Property
// console.log("Length:", str.length);

// // Character Access
// console.log("charAt:", str.charAt(1));
// console.log("charCodeAt:", str.charCodeAt(1));

// // String Combination
// console.log("concat:", str.concat(" - Learn JS"));

// // Searching
// console.log("includes:", str.includes("Java"));
// console.log("indexOf:", str.indexOf("l"));
// console.log("lastIndexOf:", str.lastIndexOf("l"));
// console.log("startsWith:", str.startsWith("He"));
// console.log("endsWith:", str.endsWith("World  "));

// // Matching & Regex
// console.log("match:", str.match(/l/g));
// console.log("matchAll:", [...str.matchAll(/l/g)]);
 

// // Extracting
// console.log("slice:", str.slice(2, 12));
// console.log("substring:", str.substring(2, 12));
// console.log("substr (deprecated):", str.substr(2, 10));

// // Modifying
// console.log("replace:", str.replace("JavaScript", "JS"));
// console.log("replaceAll:", str.replaceAll(" ", "_"));
// console.log("toUpperCase:", str.toUpperCase());
// console.log("toLowerCase:", str.toLowerCase());
// console.log("trim:", str.trim());
// console.log("trimStart:", str.trimStart());
// console.log("trimEnd:", str.trimEnd());

// // Padding
// console.log("padStart:", "5".padStart(4, "0"));
// console.log("padEnd:", "5".padEnd(4, "0"));

// // Repeating
// console.log("repeat:", "Hi ".repeat(3));

// // Splitting
// console.log("split:", str.split(" "));

// // Conversion
// console.log("toString:", str.toString());
// str="675"
// console.log("valueOf:", str.valueOf());

// // Template Literals
// let name = "John";
// let age = 25;
// let msg = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log("Template Literal:", msg);

// // Character by Index
// console.log("Character by Index:", str[2]);




// ------------------------------------------------------------------------------------------------------
// {/* <button onclick="changeText()">Click Me</button>
// <p id="demo">Hello World</p>

// <script>
//   function changeText() {
//     document.getElementById("demo").innerHTML = "Text Changed!";
//   }
// </script> */}





//-------------------------------------------------------------------------------------------------------------
// add two no
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Add Two Numbers</title>
// </head>
// <body>

//   <h2>Add Two Numbers</h2>

//   <input type="number" id="num1" placeholder="Enter first number">
//   <input type="number" id="num2" placeholder="Enter second number">
//   <button onclick="addNumbers()">Add</button>

//   <h3>Result: <span id="result">0</span></h3>

//   <script>
//     function addNumbers() {
//       let n1 = parseFloat(document.getElementById("num1").value);
//       let n2 = parseFloat(document.getElementById("num2").value);
//       let sum = n1 + n2;
//       document.getElementById("result").textContent = sum;
//     }
//   </script>

// </body>
// </html>


// ---------------------------------------------------------------------------------
// Example: Simple Try-Catch
try {
    let result = 10 / 0;
    console.log("Result:", result);
  
    // Simulate error
    console.log(a)
    let a=9
    // let a = undefinedVariable; // ReferenceError
  } catch (err) {
    console.log("Error Caught:", err.message);
  }
  


// finally Block Example
try {
 
    console.log("Trying something risky...");
    throw new Error("Oops, something went wrong!");
  } catch (err) {
    console.log("Caught:", err.message);
  } finally {
    console.log("This will always run.");
  }
  


// ✅ throw – Create Custom Error
function divide(a, b) {
    if (b === 0) {
      throw new Error("Denominator cannot be zero!");
    }
    return a/ b;
  }
  
  try {
    let result = divide(10,9);
    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }
  


// Custom throw Example


// function validateAge(age) {
//     if (age < 18) {
//       throw "Access Denied: You must be 18+";
//     }
//     return "Access Granted";
//   }

  
//   try {
//     console.log(validateAge(16));
//   } catch (err) {
//     console.log("Error:", err);
//   }
  



// function validateForm(name) {
//     if (!name) {
//       throw new Error("Name field cannot be empty!");
//     }
//     return "Form Submitted!";
//   }
  
//   try {
//     let message = validateForm("");
//     console.log(message);
//   } catch (err) {
//     console.log("Form Error:", err.message);
//   } finally {
//     console.log("Validation attempt finished.");
//   }
  
// ----------------------------------------------------------------------------------
// 1. Scope & Scope Chain
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c); // 10, 20, 30
//   }
//   inner();
  
// }
// outer();


// ------------------------------------------------------------------------------------------
// 2. Lexical Environment

// function hello() {
//     let msg = "Hi";
//     function sayHello() {
//       console.log(msg); // Lexical environment: outer's variables are accessible
//     }
//     sayHello();
//   }
//   hello();
  
// ----------------------------------------------------------------------------------------
// 3. Closures

function add(a,b){
  return(a+b)

}
add(2,5)
console.log(add(12,4))

// function counter() {
//     let count = 0;
//     return function () {
//       count++;
//       console.log(count);
//     };
//   }
//   const inc = counter();
//   inc(); // 1
//   inc(); // 2

//------------------------------------------------------------------------------------------------------

// 4. Hoisting
// console.log(x); // undefined
// var x = 10;

// // Functions are hoisted completely
// greet();
// function greet() {
//   console.log("Hello!");
// }

// -------------------------------------------------------------
// this
// const obj = {
//     name: "Zara",
//      age:12

//     showName() {
//       console.log(this.name);
//  console.log(this.age);
//     },
//   };
  // obj.showName(); // Zara
// console.log(  obj.name)
  




//----------------------------------------------------------------------
// call apply bind
// const person = { name: "Zint" };

// function greet(msg) {
//   console.log(msg + ", " + this.name);
// }

// greet.call(person, "Hello");   // Hello, Zint
// greet.apply(person, ["Hi"]);  // Hi, Zint

// const greetZint = greet.bind(person);
// greetZint("Hey"); // Hey, Zint

  



// ---------------------------------------------------------------------------
// Simple Async/Await Program
// console.log("i am calling this function at 1")

// function sayHello() {
//     return new Promise((resolve) => {
      // setTimeout(() => {
      //   resolve(console.log("Hello, World!   at 2"));
      // }, 1000); // 1 second delay



      // ---------------------------


//     });
//   }
//   sayHello()

//   console.log("this is third function at 3")
  // async function greetUser() {  
  //   const message = await sayHello();  // waiting for the promise to resolve
  //   console.log(message);
  // }
  
//   greetUser();




//--------------------------------------------------------------------------------------------------------
// // ✅ Asynchronous JavaScript - Complete Guide in One File

// // 1️⃣ Callbacks
// function greetUserCallback(name, callback) {
//     console.log("Hello " + name);
//     callback();
//   }
//   greetUserCallback("Alice", () => console.log("Callback executed!"));
  
//   // 2️⃣ Promises
//   function fetchDataPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("✅ Data loaded via Promise");
//       }, 1000);
//     });
//   }
  
//   fetchDataPromise()
//     .then((data) => console.log(data))
//     .catch((err) => console.log("Error:", err))
//     .finally(() => console.log("Promise Completed"));
  
//   // 3️⃣ Async / Await
//   async function loadDataAsync() {
//     try {
//       const data = await fetchDataPromise();
//       console.log("🕒 Async/Await:", data);
//     } catch (error) {
//       console.log("❌ Error:", error);
//     } finally {
//       console.log("Async function completed");
//     }
//   }
//   loadDataAsync();
  
//   // 4️⃣ Fetch API (Using a public JSON placeholder API)
//   async function fetchUsers() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users = await response.json();
//       console.log("👥 Users:", users);
//     } catch (error) {
//       console.log("❌ Fetch error:", error);
//     }
//   }
//   fetchUsers();
  
//   // 5️⃣ JSON Handling
//   const jsonString = '{"name": "John", "age": 25}';
//   const jsonObj = JSON.parse(jsonString);
//   console.log("Parsed JSON:", jsonObj);
  
//   const newJson = JSON.stringify({ city: "New York", country: "USA" });
//   console.log("Stringified JSON:", newJson);
  
//   // 6️⃣ setTimeout & setInterval
//   setTimeout(() => {
//     console.log("⏰ Hello from setTimeout (runs once after 2 sec)");
//   }, 2000);
  
//   let count = 0;
//   const intervalId = setInterval(() => {
//     count++;
//     console.log("🔁 setInterval Count:", count);
//     if (count >= 3) clearInterval(intervalId);
//   }, 1000);
  
//   // 7️⃣ Promise.all()
//   const p1 = Promise.resolve("✅ P1 done");
//   const p2 = new Promise((res) => setTimeout(() => res("✅ P2 done"), 1500));
//   const p3 = Promise.resolve("✅ P3 done");
  
//   Promise.all([p1, p2, p3]).then((results) => {
//     console.log("🔗 Promise.all Results:", results);
//   });
  
//   // 8️⃣ Promise.race()
//   const fast1 = new Promise((res) => setTimeout(() => res("🚀 Fast 1"), 500));
//   const fast2 = new Promise((res) => setTimeout(() => res("🚀 Fast 2"), 800));
  
//   Promise.race([fast1, fast2]).then((firstResult) => {
//     console.log("🏁 Promise.race Winner:", firstResult);
//   });
  
  


//------------------------------------------------------------------------------------------------window object
// console.log(window.innerWidth); // width of the browser window
// alert("Hello"); // same as window.alert("Hello");




// ✅ 2. Navigator Object
// Provides information about the browser and the user's device.
// console.log(navigator.userAgent); // Browser and OS info
// console.log(navigator.language); // Language settings
// console.log(navigator.onLine); // true or false (network status)



// ✅ 3. Location Object
// Contains info about the URL of the current page, and allows redirection.
// console.log(location.href); // Current URL
// location.reload(); // Reload the page
// location.assign("https://example.com"); // Redirect to a new page


// example
<!DOCTYPE html>
<html>
<head>
  <title>Location Object Example</title>
</head>
<body>
  <h2>Location Object Example</h2>
  <button onclick="showURL()">Show Current URL</button>
  <button onclick="reloadPage()">Reload Page</button>
  <button onclick="redirectToExample()">Go to Example.com</button>

  <script>
    // Show current URL
    function showURL() {
      alert("Current URL is: " + location.href);
    }

    // Reload the page
    function reloadPage() {
      location.reload();
    }

    // Redirect to a new page
    function redirectToExample() {
      location.assign("https://example.com");
    }
  </script>
</body>
</html>
// ---------------------------------



// import React, { useState } from "react";

// const Home = () => <div><h3>🏠 Home Page</h3><p>This is the home content.</p></div>;
// const About = () => <div><h3>ℹ️ About Page</h3><p>This is the about content.</p></div>;

// const App = () => {
//   const [page, setPage] = useState("home");

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🌐 Single Page with Div-Based Navigation</h2>

//       <button onClick={() => setPage("home")} style={btnStyle}>Home</button>
//       <button onClick={() => setPage("about")} style={btnStyle}>About</button>

//       <div style={contentStyle}>
//         {page === "home" && <Home />}
//         {page === "about" && <About />}
//       </div>
//     </div>
//   );
// };

// const btnStyle = {
//   margin: "5px",
//   padding: "10px 20px",
//   cursor: "pointer",
// };

// const contentStyle = {
//   marginTop: "20px",
//   padding: "15px",
//   border: "1px solid #ccc",
//   borderRadius: "10px"
// };

// export default App;





//---------------------------------------







// ✅ 4. History Object
// Allows navigation through the browser history.

// history.back();   // Go to the previous page
// history.forward(); // Go to the next page
// history.go(-2);    // Go back two pages





// --------------------------------------------------------------------oops-----------------------------------
// // 1. Object Literal
// const car1 = {
//     brand: "Toyota",
//     model: "Corolla",
//     start: function () {
//       console.log(`${this.brand} ${this.model} is starting...`);
//     }
//   };
//   car1.start();
  
//   // 2. Constructor Function
//   function Car(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   Car.prototype.start = function () {
//     console.log(`${this.brand} ${this.model} is starting using prototype method.`);
//   };
//   const car2 = new Car("Honda", "City");
//   car2.start();
  
//   // 3. ES6 Class
//   class Vehicle {
//     constructor(type, wheels) {
//       this.type = type;
//       this.wheels = wheels;
//     }
  
//     showInfo() {
//       console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
//     }
//   }
//   const v1 = new Vehicle("Bike", 2);
//   v1.showInfo();
  
//   // 4. Inheritance and Method Overriding (Polymorphism)
//   class ElectricVehicle extends Vehicle {
//     constructor(type, wheels, battery) {
//       super(type, wheels);
//       this.battery = battery;
//     }
  
//     showInfo() {
//       console.log(`This is an electric ${this.type} with ${this.wheels} wheels and ${this.battery} battery.`);
//     }
//   }
//   const ev = new ElectricVehicle("Scooter", 2, "Lithium-ion");
//   ev.showInfo();
  
//   // 5. Encapsulation using Private Fields
//   class BankAccount {
//     #balance = 0;
  
//     deposit(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//         console.log(`Deposited: ₹${amount}`);
//       }
//     }
  
//     withdraw(amount) {
//       if (amount <= this.#balance) {
//         this.#balance -= amount;
//         console.log(`Withdrawn: ₹${amount}`);
//       } else {
//         console.log("Insufficient balance.");
//       }
//     }
  
//     checkBalance() {
//       console.log(`Current Balance: ₹${this.#balance}`);
//     }
//   }
//   const account = new BankAccount();
//   account.deposit(5000);
//   account.withdraw(2000);
//   account.checkBalance();
  
//   // 6. Abstraction (hide internal working using methods)
//   class CoffeeMachine {
//     start() {
//       this.#boilWater();
//       this.#brew();
//       console.log("Coffee is ready ☕");
//     }
  
//     #boilWater() {
//       console.log("Boiling water...");
//     }
  
//     #brew() {
//       console.log("Brewing coffee...");
//     }
//   }
//   const coffee = new CoffeeMachine();
//   coffee.start();
  


//-------------------------------------------------------------------------------------------
// Optional Chaining (?.)
// ➤ Purpose:
// To safely access deeply nested properties without throwing errors if a property is undefined or null.

// const user = { name: "Alice", address: null };
// console.log(user.address.city); // ❌ Error: Cannot read property 'city' of null



// const user = { name: "Alice", address: null };
// console.log(user.address?.city); // ✅ undefined (No error)



//------------------------------------------------------------------------
// Nullish Coalescing (??)
// const a = 0 || 5;   // → 5  (because 0 is falsy)
// const b = 0 ?? 5;   // → 0  (because 0 is NOT null/undefined)

// const c = "" || "Hello";  // → "Hello"
// const d = "" ?? "Hello";  // → "" ✅

// real example

// const user = {
//     profile: {
//       username: "john_doe"
//       // email is missing
//     }
//   };
  
//   const email = user.profile?.email ?? "No email provided";
//   console.log(email); // Output: No email provided
  




//----------------------------------------------------------Nodejs----------------------------------
// index.js

// // 🔸 Core Modules
// const fs = require('fs');
// const http = require('http');
// const path = require('path');
// const os = require('os');

// // Displaying core module usage
// console.log("Current File:", path.basename(__filename));
// console.log("OS Platform:", os.platform());
// console.log("Free Memory:", os.freemem());

// // 🔸 Write & Read File
// fs.writeFileSync("sample.txt", "Hello from Node.js core modules!");
// const fileData = fs.readFileSync("sample.txt", "utf-8");
// console.log("File Data:", fileData);

// // 🔸 Express Setup
// const express = require('express');
// const app = express();
// app.use(express.json()); // Built-in middleware

// // 🔸 In-Memory Dummy Data
// let users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ];

// // 🔸 Routes (REST APIs)
// app.get('/', (req, res) => {
//   res.send("✅ Welcome to Node.js + Express API");
// });

// app.get('/users', (req, res) => {
//   res.json(users);
// });

// app.post('/users', (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// app.put('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedUser = req.body;
//   users = users.map(u => u.id === id ? updatedUser : u);
//   res.json(updatedUser);
// });

// app.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   users = users.filter(u => u.id !== id);
//   res.json({ message: "User deleted successfully" });
// });

// // 🔸 Middleware Example
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// // 🔸 Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });

// // 🔸 MongoDB Integration (Basic)
// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/demoDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("📦 MongoDB Connected"))
//   .catch(err => console.log("MongoDB Connection Failed", err));

// // Define Schema & Model
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String
// });
// const UserModel = mongoose.model("User", userSchema);

// // MongoDB Routes
// app.post('/add-user', async (req, res) => {
//   const user = new UserModel(req.body);
//   const result = await user.save();
//   res.json(result);
// });

// app.get('/mongo-users', async (req, res) => {
//   const allUsers = await UserModel.find();
//   res.json(allUsers);
// });

// // 🔸 Start Express Server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
