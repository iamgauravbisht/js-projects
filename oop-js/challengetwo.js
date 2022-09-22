///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

class Car {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.maker} going at ${this.speed}km/h`);
  }
  accelaration() {
    this.speed += 10;
    console.log(`${this.maker} going at ${this.speed}km/h`);
  }
}
const g = new Car('Ford', 120);
console.log(g);
console.log(g.speedUS);
g.accelaration();
console.log(g.speedUS);
g.brake();
console.log(g.speedUS);
g.speedUS = 100;
console.log(g.speedUS);
g.brake();
