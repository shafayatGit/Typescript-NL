//dynamically generalized
//const friends: string[] = ["Rahim", "Karim", "Jabbar"];
const friends: Array<string> = ["Rahim", "Karim", "Jabbar"]; //generic array type
// const age: number[] = [20, 25, 30];
const age: Array<number> = [20, 25, 30]; //generic array type
// const isAdult: boolean[] = [true, false, true];
const isAdult: Array<boolean> = [true, false, true]; //generic array type

//generic tuple type
// const person: [string, number, boolean] = ["Shafayat", 24, true];
const person: Array<string | number | boolean> = ["Shafayat", 24, true]; //generic tuple type

//Way of use
type GenericArray<T> = Array<T>; //generic type alias
const friends2: GenericArray<string> = ["Salam", "Kalam", "Jabbar"];
const age2: GenericArray<number> = [28, 32, 35];
const isAdult2: GenericArray<boolean> = [true, true, false];

//generic tuple type alias
type Coordinate<X, Y, Z> = [X, Y, Z]; //generic tuple type alias
const coordinate1: Coordinate<number, number, number> = [10, 20, 30];
const coordinate2: Coordinate<string, string, string> = ["10N", "20E", "30W"];

//for object type generic
type User = { name: string; age: number };
const user: GenericArray<User> = [
  { name: "Shafayat", age: 24 },
  { name: "Patowary", age: 30 },
];
