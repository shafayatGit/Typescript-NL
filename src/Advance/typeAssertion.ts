//Assertion mane typescript k ami bujhabo je eitar type ki hobe.. define ami nije korbo.
//Example:
let anything: any;
anything = 10;
(anything as number).toFixed(2); // ekhane ami typescript k bujhiye dicchi je eta number type er ekta variable tai ami number er method use korte parbo

let someValue: any;
someValue = "Hello, TypeScript!";
//console.log((someValue as number).toFixed(2)); // eta error dibe karon bolsi any ar disi string but ami number er method use korte chacchi tai error dibe abar suggestion o dibe
console.log((someValue as string).split(" ")); // ekhaneo ami typescript k bujhiye dicchi je eta string type er ekta variable tai ami string er method use korte parbo

const kgToGram = (input: number | string)=>{
    if(typeof input === "number"){
        return input * 1000;
    }
    else if(typeof input === "string"){
        const [value] = input.split(" ");
        return Number(value)* 1000;
    }
    else{
        throw new Error("Invalid input type");
    }
}
console.log(kgToGram(5)); // Output: 5000
console.log(kgToGram("10 kg")); // Output: 10000