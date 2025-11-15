"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Nullable
const getUser = (name) => {
    if (name) {
        console.log(`User Name is ${name}`);
    }
    else {
        console.log("No User Name Provided");
    }
};
getUser("Shafayat");
getUser(null);
//Unknown
const disCountedPrice = (price) => {
    if (typeof price === "number") {
        const discount = price * 0.1;
        console.log(discount);
    }
    else if (typeof price === "string") {
        const [amount] = price.split(" ");
        const discount = Number(amount) * 0.1; // number constructor use kore string ke number e convert kora hoyeche
        console.log(discount);
    }
    else {
        console.log("Invalid Price");
    }
};
disCountedPrice(100);
disCountedPrice("200 USD");
disCountedPrice(null);
//never 
const throwError = (msg) => {
    throw new Error(msg);
};
// throwError("This is a critical error"); //eta jiboneo kichu return korbena tai etar return type never hobe.
//  eta call korle program stop hoye jabe tai comment kore rakhlam 
//# sourceMappingURL=NullableUnknownNever.js.map