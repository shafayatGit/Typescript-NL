//Type Alias
type User = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user" | "guest";
};
type UserWithRole = User & Role;

//Interface. => shudhumatro Object type datar jonno kaj korbe ex: array, object , function er jonno
interface IUser {
  name: string;
  age: number;
}
interface IUserWithRole extends IUser {
  role: "admin" | "user" | "guest";
}

const user1: UserWithRole = {
  name: "Shafayat",
  age: 25,
  role: "admin",
};

const user2: IUserWithRole = {
  //same as type alias but using interface
  name: "Patowary",
  age: 30,
  role: "user",
};

//Array of type alias
type Friends = string[];
const friendsList: Friends = ["Alice", "Bob", "Charlie"];
//Array of interface
interface IFriends {
  [index: number]: string; //index signature
}
const friendsList2: IFriends = ["David", "Eve", "Frank"];
console.log(friendsList2);

//Function type alias
interface IaddFunc {
  (a: number, b: number): number; //function signature
}
const addNums: IaddFunc = (x, y) => x + y;
console.log(addNums(5, 10));
