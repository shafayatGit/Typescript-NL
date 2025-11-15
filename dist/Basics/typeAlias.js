"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 1,
    name: { firstName: "Shafayat", lastName: "Patowary" },
    gender: "male",
    contactNo: 1234567890,
    address: {
        division: "Dhaka",
        city: "Dhaka",
    },
};
const user2 = {
    id: 2,
    name: { firstName: "Shafayat", lastName: "2" },
    gender: "male",
    contactNo: 1234567890,
    address: {
        division: "Dhaka",
        city: "Dhaka",
    },
};
//Function using Type Alias
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(5, 10));
//# sourceMappingURL=typeAlias.js.map