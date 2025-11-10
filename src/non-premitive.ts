//array , object
//tuple

// String Type Array
let stringArray: string[] = ["apple", "banana", "cherry"];
stringArray.push("date");
// stringArray.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(stringArray);

let mixedArray = ["apple", 42, true]; // (string | number | boolean)[] type array
//mixedArray.push({name: 'John', age: 30}); // we can not push any type of value bz of string or number or bool array
console.log(mixedArray);

//?Tuple
const couple: [string, string] = ["Husband", "Wife"];
//const couple : [string,string] = ["Husband","Wife", "Child"]; // Error: Source has 3 element(s) but target allows only 2.

const rollAndName: [number, string] = [1, "Shafayat"];

const destination: [string, string, number] = ["Dhaka", "Chittagong", 700];

//--?Reference Type Object
// let person: {
//   company: "ITOrg"; // literal type property and this property and value must be same
//   firstName: string;
//   middleName?: string;
//   isEmployed: boolean;
//   lastName: string;
// } = {
//   company: "ITOrg",
//   firstName: "Shafayat",
//   middleName: "Hossain", // used optional property in the type
//   lastName: "Patowary",
//   isEmployed: false,
// };
// person.isEmployed = true; // We can change the value from the outside
//!person.company = "OtherOrg"; // Error: Type '"OtherOrg"' is not assignable to type '"ITOrg"'.

//? Access modifier: readonly
let person: {
  readonly company: string; // readonly property => Access modifier
  firstName: string;
  middleName?: string;
  isEmployed: boolean;
  lastName: string;
} = {
  company: "ITOrg",
  firstName: "Shafayat",
  middleName: "Hossain", // used optional property in the type
  lastName: "Patowary",
  isEmployed: false,
};
person.isEmployed = true; // We can change the value from the outside
//!person.company = "OtherOrg"; // Error: Cannot assign to 'company' because it is a read-only property.

console.log(person);
