//functions

function logger() {
    console.log("My name is Vaibhav");
}
// calling the functions/running/invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges `;
    return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);
//console.log(fruitProcessor(5, 0));
const appleorangejuice = fruitProcessor(2, 5);
console.log(appleorangejuice);


//function Declarations vs. expressions
//function declaration
function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;

}
const age1 = calcAge1(2001);
console.log(age1);

//functions expression
const calcAge2 = function(birthYear) {

    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);