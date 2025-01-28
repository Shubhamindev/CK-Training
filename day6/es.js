
//1
let add=(a,b) => {return a+b}
console.log(add(5,9))


//2
function greet(name, message = "Welcome!") {
  return `${message}, ${name}!`;
}
console.log(greet("Shubham"));
console.log(greet("Annu", "Hello")); 


//3
const formatString = (name, age) => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(formatString("shubham",20));

//4

const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

const{name,city} = person;

#5
