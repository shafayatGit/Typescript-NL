//Type Alias
type User = {
  id: number;
  name: { firstName: string; lastName: string };
  gender: "male" | "female";
  contactNo: number;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 1,
  name: { firstName: "Shafayat", lastName: "Patowary" },
  gender: "male",
  contactNo: 1234567890,
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const user2: User = {
  id: 2,
  name: { firstName: "Shafayat", lastName: "2" },
  gender: "male",
  contactNo: 1234567890,
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

//Function Type Alias
type AddFunc = (a: number, b: number) => number;

//Function using Type Alias
const add: AddFunc = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 10));