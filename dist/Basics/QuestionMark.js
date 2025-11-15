"use strict";
// ? => Ternary Operator , ?? => Nullish Coalescing Operator ,
// .? => Optional Chaining Operator
Object.defineProperty(exports, "__esModule", { value: true });
//--? Ternary Operator
let age = 20;
let isAdult = age >= 18 ? "Yes, Adult" : "No, Not Adult";
// console.log(isAdult); // Output: Yes, Adult
//--? Nullish Coalescing Operator
const userTheme = ""; //only null or undefined consider as nullish
const defaultTheme = userTheme ?? "Light Theme:"; // etar mani jodi null ba undefined hoy tahole Light theme ta dibe ar nahole userTheme er value ta dibe
console.log(`Selected Theme: ${defaultTheme}`); // Output: Selected Theme: Light Theme:
//--? Optional Chaining Operator
const userProfile = {
    id: 1,
    name: "Shafayat",
    // address is optional and not provided here
};
// Accessing address safely using optional chaining
const userCity = userProfile.address?.city ?? "City not available";
console.log(`User City: ${userCity}`); // Output: User City: City not available
//# sourceMappingURL=QuestionMark.js.map