
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


//5

function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4));


//6

function filterEvens(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvens([2, 4, 8, 10])); 

//7
function doubleValues(numbers) {
  return numbers.map(num => num * 2);
}

console.log(doubleValues([1,2,3,43,2]))


//8
function findMax(numbers) {
  return Math.max(...numbers);
}

console.log(findMax([1, 2, 3, 4, 5]));

//9
const data = [
  {
    name: "Bob",
    age: 24
  },
  {
    name: "Alice",
    age: 21
  }
];

function getAliceInfo(data) {
  const alice = data.find(person => person.name === "Alice");
  return `${alice.name}’s age is ${alice.age}.`;
}

console.log(getAliceInfo(data)); 

//10
const data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  }
];

function selectKeys(data, keys) {
  return data.map(item => {
    const selected = {};
    keys.forEach(key => {
      if (key in item) {
        selected[key] = item[key];
      }
    });
    return selected;
  });
}

const result = selectKeys(data, ["id", "title", "price"]);
console.log(result);


//11
const fun = (name = "abc") => {
  if (name) {
    console.log("if", name);
  } else {
    console.log("else", name);
  }
};

fun("");


//12
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
    if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);

clonedObj.b.c = 42;

console.log(obj.b.c);
console.log(clonedObj.b.c);


//13
function flattenArray(arr) {
  return arr.reduce((flat, item) => {
    return Array.isArray(item) 
      ? flat.concat(flattenArray(item)) 
      : flat.concat(item);
  }, []);
}
console.log(flattenArray([1, [2, [3, [4, 5]]]]));
