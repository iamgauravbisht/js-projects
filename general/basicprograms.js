// Hello world

// console.log('Hello world');

// add two numbers

// const sum = (num1,num2)=>{
//     console.log(num1+num2) ;
// }
// sum(4,5);

// square root

// function sqaure(number){
//     return number * number;
// }
// console.log(`square of number is ${sqaure(5)}`);

// area of triangle

// const trianglearea=(base,height)=>{
//     console.log(`area of triangle is ${1/2* base *height}sq.unit`);
// }
// trianglearea(3,4);

// program to swap two variable

// function swap(a,b,c,i=0){
//     i=a;
//     a=b;
//     b=c;
//     c=i;
//     console.log(`values are swaped a:${a} b:${b} c:${c}`);
// }
// swap(3,4,5);

// quadratic equation

// the a : it denote the magnitude of x^2
// the b : it denote the magnitude of x
// the c : it denote the magnitude of constant
// thw equation is in the form of ax^2 + bx + c = 0
// solution = roots of quadratic equation
// d=(-b+-underrootb^2-4ac)/2

// const solution = (a,b,c)=>{
//     const d = b*b-4*a*c;
//     var root1 =0;
//     var root2 =0;
//     if (d>0){
//         root1 =(-b + Math.sqrt(d))/2*a;
//         root2 =(-b - Math.sqrt(d))/2*a;
//         console.log(`the root1 : ${root1} and root2 : ${root2}`)
//     }else if(d==0){
//         root1 = (-b)/2*a;
//         console.log(`the roots are same \n the value of root is ${root1}`);
//     }else if(d<0){
//         root1 =(-b + Math.sqrt(d))/2*a;
//         root2 =(-b - Math.sqrt(d))/2*a;
//         console.log(`the roots are imaginary \n the root1 : ${root1} and root2 : ${root2}`);
//     }
// }
// solution(2,4,3);

// converting kilometer to miles
// 1kilometer = 0.62137miles

// const kilometers = prompt(`Enter the no. of kilometer:`);
// const miles = kilometers*0.62137;
// console.log(`${kilometers}kilometers = ${miles}miles`);

// celcius to fahrenheit
// multiply by 1.8 (or 9/5) and add 32.

// const celcius = prompt(`Enter the celcius:`);
// const fahrenheit = celcius*1.8+32;
// console.log(`${celcius}celcius = ${fahrenheit}f`);

// Generating random number
// random number between 1 to 10

// const random = Math.floor(Math.random()*10);
// console.log(random);

// Program to Check if a number is Positive, Negative, or Zero

// const number=prompt("enter the number:");
// function check(number){
//     if(number>0)console.log("the number is positive");
//     else if(number<0)console.log("the number is negative");
//     else if(number==0)console.log("the number is zero");
// }
// console.log(check(number));

// Program to Check if a Number is Odd or Even

// function check(){
//     let number = prompt("enter a number :")
//     if(number%2==0)console.log("the number is even");
//     else console.log("the number is odd ");
// }
// console.log(check());

// Program to Find the Largest Among Three Numbers

// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }
// console.log("The largest number is " + largest);

// Program to Check Prime Number

// const arr = [17, 21, 23];
// const printForecast = arr.forEach((arr, index) => {
//   console.log(`${arr}c in ${index + 1} days`);
// });
