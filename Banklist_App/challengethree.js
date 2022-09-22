// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
const dogAge = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = dogAge => {
  const humanAge = [];
  dogAge.forEach(el =>
    el > 2 ? humanAge.push(16 + el * 4) : humanAge.push(2 * el)
  );
  const avg =
    humanAge.filter(el => el >= 18).reduce((acc, el) => acc + el, 0) /
    humanAge.length;
  console.log(avg);
};

calcAverageHumanAge(dogAge);
