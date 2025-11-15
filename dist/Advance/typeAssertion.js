"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Assertion mane typescript k ami bujhabo je eitar type ki hobe.. define ami nije korbo.
//Example:
let anything;
anything = 10;
anything.toFixed(2); // ekhane ami typescript k bujhiye dicchi je eta number type er ekta variable tai ami number er method use korte parbo
let someValue;
someValue = "Hello, TypeScript!";
//console.log((someValue as number).toFixed(2)); // eta error dibe karon bolsi any ar disi string but ami number er method use korte chacchi tai error dibe abar suggestion o dibe
console.log(someValue.split(" ")); // ekhaneo ami typescript k bujhiye dicchi je eta string type er ekta variable tai ami string er method use korte parbo
//# sourceMappingURL=typeAssertion.js.map