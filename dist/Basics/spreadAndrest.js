"use strict";
//Spread means to expand or unpack elements of an array or object into individual elements. It is represented by three dots (...).
Object.defineProperty(exports, "__esModule", { value: true });
//Rest means to collect multiple elements into a single array or object. It is also represented by three dots (...).
//Spread with Array
const friends = ["Rahim", "Karim", "Jabbar"];
const schoolFriends = ["Salam", "Kalam"];
const collegeFriends = ["Halum", "Palam"];
friends.push(...schoolFriends, ...collegeFriends, "NewFriend1", "NewFriend2");
console.log(friends);
const user = {
    name: "Shafayat",
    number: 1234567890,
};
const address = {
    city: "Dhaka",
    country: "Bangladesh",
};
const userInfo = { ...user, ...address, profession: "Developer" };
console.log(userInfo);
//Rest with Function
const sendInvite = (...friends) => {
    friends.forEach((friend) => {
        console.log(`Invitation sent to ${friend}`);
    });
};
sendInvite("Rahim", "Karim", "Jabbar");
//# sourceMappingURL=spreadAndrest.js.map