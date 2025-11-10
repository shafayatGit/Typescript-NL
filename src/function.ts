//There are 2 types of functions => Normal and Arrow function

//Strcuture :
// function functionName (parameter1: type, parameter2: type, ...) : returnType {
//     return value; // of returnType
// }

// Normal Function
function add(x: number, y: number): number {
  return x + y;
}

//add(5, "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(add(5, 10));

// Arrow Function
// Structure:
// const functionName = (parameter1: type, parameter2: type, ...) : returnType => {
//     return value; // of returnType
// }
const multiply = (a: number, b: number): number => {
  //must use a variable to store the function
  return a * b;
};

console.log(multiply(4, 6));

//Object er vitore function => method
const poorUser = {
  name: "Shafayat",
  balance: 0,
  addBalance(value: number): number {
    const totalBal = this.balance + value;
    this.balance = totalBal;
    return this.balance;
  },
};

poorUser.addBalance(100);
console.log(poorUser);

// Mapping an array
const numbers: number[] = [1, 2, 3, 4, 5];
const updatedNumbers = numbers.map((num: number): number => num * 2);
console.log(updatedNumbers);

