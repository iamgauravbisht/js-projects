//Data structure, Modern operator and String
// Destructuring array
// const arr = [2, 4, 5];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];
// console.log(x, y, z);
// const [a, b, c] = arr;
// console.log(a, b, c);
const restaurant = {
  name: 'gaurav',
  location: 'New Delhi 08 , sanjay park',
  categories: ['indian', 'pahadi', 'delhite', 'hindu'],
  StarterMenu: ['Bread', 'egg', 'Boiled', 'salad'],
  MainMenu: ['Pizza', 'Pasta', 'risotto', 'tanduri chicken'],
  openingHours: {
    thu: {
      open: 11,
      close: 22,
    },
    fri: {
      open: 12,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order(starterindex, mainindex) {
    return [this.StarterMenu[starterindex], this.MainMenu[mainindex]];
  },
  orderDelivery(obj) {
    console.log(obj);
  },
};
// To swap values
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 value from a array
// const [starter, maincourse] = restaurant.order(0, 0);
// console.log(starter, maincourse);

// Nested array destructuring
// const menthod = [2, 4, [5, 6]];
// const [, , [a, b]] = menthod;
// console.log(a, b);

// Default value
// let [p = 1, q = 1, r = 1] = [56, 67];
// console.log(p, q, r);
// [p = 1, q = 1, r = 1] = [56];
// console.log(p, q, r);

// Destruturing in object

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const { name: n, openingHours: o, categories: c } = restaurant;
// console.log(n, o, c);

// Default value
// const { menu = [], StarterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// Mutating variables
// let a = 11;
// let b = 34;
// const obj = { a: 23, b: 45, c: 34 };
// ({ a, b } = obj);
// console.log(a, b);

//Nested objects

// const { fri } = restaurant.openingHours;
// console.log(fri);
// const { fri: s } = restaurant.openingHours;
// console.log(s);

// we want open and close of fri {as they are nested}
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// object as argument

// restaurant.orderDelivery({
//   name: 'gaurav',
//   age: 21,
//   height: '5foot7inch',
// });
