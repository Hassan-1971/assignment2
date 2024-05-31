// Question 1
let carName = "Volvo";

// Question 2
let firstname ="John", lastname = "Doe", age = 35;

// Question 3
 let X = 10;
 let y = 5;
 X *=  y;


// Question 4
let length = 16; // Number
let lastName = "Johnson"; // String 

const x = {
  firstName: "John",  
  lastName: "Doe"
}    // Object 

// Question 5
function myFunction() {
    alert("Hello World!");
  }

 // myFunction()

// Question 6
let person = {
    name: "John",
    age: 50
};
function personsInfo(a) {
      alert(`${a.name} is ${a.age}`);  
}



// Question 7
function message (){
   let name = prompt (`Type your name here`);
   alert(`Thank you Mr. ${name} for your input.`);
}

// Question 8

const cars = ["Volvo", "Jeep", "Mercedes"];
let arrayNum = cars.length;

function message2 (){
  alert(`Total number of the Array items is ${arrayNum}`); 
}

const Brand = ["Volvo", "Jeep", "Mercedes"];  
Brand[0]="Ford";

console.log(Brand)


// Question 9
let RandomNum = Math.ceil(Math.random()*5);
console.log(RandomNum)

let MaxNum = Math.max(10, 20);
console.log(MaxNum)

let Sqroot = Math.sqrt(9);
console.log(Sqroot);
//document.querySelector('body').innerHTML = Brand;  

// Question 10   (Value of X & y is already declared into Question 3)
function status (){
  if (X > y) {
    alert(true);
  } else {
    alert(false)
  }
}

function ageCompare (){
  let Age= 15;
let message3= Age < 18 ? "Too Young" : "Old ENough";
alert(message3);
}
