// creating a function to reverse string from world to dlrow

function reverseString(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

// shorter version using built in function

function reverseString2(str) {
    return str.split("").reverse().join("");
}

// arrow function version
const reverseString3 = str => str.split('').reverse().join('');
