//Object destructuring
// Array destructuring
const user = {
  id: 101,
  name: {
    firstName: "Shafayat",
    middleName: "Hossain",
    lastName: "Patowary",
  },
  gender: "Male",
  age: 24,
  profession: "Developer",
  favoriteColors: ["Red", "Green", "Blue"],
};

const {
  name: { firstName, middleName, lastName },
  age,
  profession,
  favoriteColors: myFavCol,
} = user; //favoriteColors: myFavCol => rename while destructuring(name aliasing)
const fullName = `${firstName} ${middleName} ${lastName}`;
const colors = myFavCol.map((color) => color.toUpperCase());
console.log(fullName);
console.log(colors);
console.log(age, profession);

// Array destructuring
const friends = ["Rahim", "Karim", "Jabbar", "Salam", "Kalam"];
const [friend1, friend2, , ...restFriends] = friends; //skip 3rd element and rest operator
console.log(friend1, friend2);
console.log(restFriends);
