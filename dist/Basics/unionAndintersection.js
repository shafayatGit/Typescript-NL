"use strict";
// Union => | (pipe) symbol is used for union type.
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    return `Dashboard for ${role}`;
};
console.log(getDashboard("admin"));
console.log(getDashboard("user"));
console.log(getDashboard("guest"));
const Chowdhury = {
    id: 1,
    name: "Shafayat Hossain",
    phoneNo: "1234567890",
    designation: "Project Manager",
    teamSize: 10
};
console.log(Chowdhury);
//# sourceMappingURL=unionAndintersection.js.map