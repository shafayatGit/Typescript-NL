//array , object
//tuple

// String Type Array
let stringArray: string[] = ['apple', 'banana', 'cherry'];
stringArray.push('date');
// stringArray.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(stringArray)

let mixedArray = ['apple', 42, true]; // (string | number | boolean)[] type array
//mixedArray.push({name: 'John', age: 30}); // we can not push any type of value bz of string or number or bool array
console.log(mixedArray)

//?Tuple
const couple : [string,string] = ["Husband","Wife"];
//const couple : [string,string] = ["Husband","Wife", "Child"]; // Error: Source has 3 element(s) but target allows only 2.

const rollAndName : [number, string] = [1, "Shafayat"];

const destination : [string, string, number] = ["Dhaka", "Chittagong", 700];
