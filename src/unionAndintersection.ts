// Union => | (pipe) symbol is used for union type

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
    return `Dashboard for ${role}`;
}
console.log(getDashboard("admin"));
console.log(getDashboard("user"));
console.log(getDashboard("guest"));


// Intersection => & (ampersand) symbol is used for Intersection type
type Employee = {
    id: number,
    name: string,
    phoneNo: string
}
type Manager = {
    designation: string,
    teamSize: number,
}
type ManagementEmployee = Employee & Manager;

const Chowdhury: ManagementEmployee = {
    id: 1,
    name: "Shafayat Hossain",
    phoneNo: "1234567890",
    designation: "Project Manager",
    teamSize: 10
};

console.log(Chowdhury);