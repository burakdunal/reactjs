let age: number = 24;

let userName: string;
userName = "Burak";

let isInstructor: boolean;
isInstructor = true;

//complex types

let hobbies: string[];
hobbies = ["Sports", "Cookies"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Burak',
  age: 29,
}

let people: Person[];

// type inference

let course = 'React - The Complete Guide';
course = '123';

let courses: string | number = 'React - The Complete Guide';
courses = '123';
courses = 123;

// Functions

function add(a: number,b: number){
  return a + b;
}

console.log(add(5,10));

function printOut(value:any){
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
insertAtBeginning(['Burak', 'Ahmet'], 'b');