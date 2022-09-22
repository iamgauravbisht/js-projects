'use strict';

const Person = function (firstName, birthYear) {
  //Instances Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  // this.CalcAge=function(){
  //     console.log(2037-this.birthYear)
  // };
};
const jonas = new Person('jonas', 1997);
const matilda = new Person('matilda', 1999);
const jack = new Person('jack', 1954);
console.log(jonas, matilda, jack);
// 1. New {} is created
// 2. function is called , this ={}
// 3. {} linked to Prototype
// 4. function automatically return {}
console.log(jonas instanceof Person);
console.log(Person.prototype);

// constructor function

Person.prototype.CalcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.CalcAge();
matilda.CalcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// we often write properties in prototype not just methods
Person.prototype.Species = 'Homo Sapiens';
console.log(jonas);

// to check if the property is inherited or not
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('Species'));

// this is pointing to Person.prototype
console.log(jonas.__proto__);

// this is pointing to Object.prototype
console.log(jonas.__proto__.__proto__);

// this will point back to Person
console.log(Person.prototype.constructor);

// this will show person object
console.dir(Person.prototype.constructor);

//Prototype of array
const arr = [1, 3, 3, 4, 5, 5, 7, 7, 7];
// this will show all methods applicable on array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// to set your own function on array as buit in function
// all array will inherit this method
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
// extended the prototype of buit in function is generally not a good idea

const h1 = document.querySelector('h1');
console.log(h1);
console.dir(h1);

// A function itself is a object so it has a prototype
console.dir(x => x + 1);

// coding challenge one ✅

// ES6 classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode
const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();

///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// coding challenge Two ✅✅
