// import add from "./add";

// console.log(add(51, 49));

// Named import 
// import calculator from "./plus"
// console.log(calculator.add(51, 49));
// console.log(calculator.subtract(51, 49));

// console.log(add (51, 49));
// console.log(subtract(51, 49));
import { nanoid } from "nanoid";

const people = [
  { name: "Іван", lastName: "Петренко", age: 25 },
  { name: "Олена", lastName: "Ковальчук", age: 32 },
  { name: "Максим", lastName: "Сидоренко", age: 28 },
  { name: "Аліна", lastName: "Ткаченко", age: 22 },
  { name: "Юрій", lastName: "Мельник", age: 35 },
  { name: "Наталя", lastName: "Іванова", age: 30 },
  { name: "Дмитро", lastName: "Бондар", age: 27 },
  { name: "Світлана", lastName: "Кравченко", age: 29 },
  { name: "Артем", lastName: "Гончар", age: 31 },
  { name: "Марина", lastName: "Литвин", age: 26 }
];
// const formatPeople1 = people.map(user => {console.log(user)}) 
const formatPeople = people.map(user => ({...user, id: nanoid()})) 
console.log(formatPeople)
// console.log(formatPeople1);


import * as calculator from "./plus"

console.log(calculator.add(51, 49));
console.log(calculator.subtract(51, 49));