
//VALUES AND VARIABLES 
/*




let js = 'amazing';
console.log(40 + 40 + 50);

console.log("vaibhav");
console.log(22);

let First = "family";
let first = "hello";
let firstNamePerson = "nill";
let First_Name_Person = "yogii";


let PI = 3.144

let myFirstJob = "programmer";
let myCurrentJob = "Webdeveloper";

let job1 = "coder";
let job2 = "teacher";

let SATISH$VAIBHAV = "VS";


console.log(SATISH$VAIBHAV);
console.log(job1);
console.log(job2);
console.log(first);
console.log(firstNamePerson);
console.log(First_Name_Person);


//DATA TYPES

//boolean type
//true;
//console.log(true);


let javascriptisfun = true;
console.log(javascriptisfun);

//console.log(typeof true);
console.log(typeof javascriptisfun);
//console.log(typeof 23);
//console.log(typeof "vaibhav");


javascriptisfun = "yes!";
console.log(typeof javascriptisfun);

let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(year);
console.log(typeof year);

console.log(null);
console.log(typeof null);



//LET CONST AND VAR

let age = 21;
age = 22;
console.log(age);

//const birthyear = 2001;
//birthyear = 23;

var job = "web developer";
job = "coder";
console.log(job);

lastname = "satish";
console.log(lastname);


//BASICS OPERATORS
//Maths operators
const now = 2037;
const agevaibhav = now - 1991;
const agesatish = 2037 - 2018;
console.log(agevaibhav, agesatish);
*/






/*console.log(agevaibhav * 2, agesatish / 10, 2 ** 3);
//2**3 means 2 to thr power of 3=2*2*2;

const firsName = "vaibhav";
const lastname = "jamdhade";
console.log(firsName + ' ' + lastname);*/


//Assignment operators
/*
let x = 10 + 5;
x += 10; //x=x+10=25
//here initially the vaue of x is 15 then we add x+= thats why its add 15+10=25;
x *= 4; //x=x*4=100
x /= 20;
x++;
x--;
console.log(x);


//Comparison operator
console.log(agevaibhav < agesatish);
console.log(agesatish >= 18);
console.log(agevaibhav <= 20);

const isfullage = agesatish >= 18;


console.log(now - 1991 > now - 2018);* /
    * /
//operator precedence

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x=y=10  right to left
console.log(x, y);

const averageage = (agevaibhav + agesatish) / 2
console.log(agevaibhav, agesatish, averageage);*/



//String and template literals


/*

const firstname = "vaibhav";
const job = "Web developer";
const birthYear = 2001;
const year = 2021;

const vaibhav = " i am " + firstname + ", a " + (year - birthYear) + " years old " + job + "!"
console.log(vaibhav);

const vaibhavnew = `I am ${firstname}, a ${year - birthYear} years old ${job}!`;
console.log(vaibhavnew);

console.log(`regular string using backticks....`);



//multilines strings
console.log(`string with \n\
multiple\n\
lines`);


//another way

console.log(`string with
multiple
lines`);

*/



/*
const age = 18
if (age >= 18) {
    console.log("vaibhav can start driving license🚗");
}
else {
    const yearleft = 18 - age;
    console.log(`vaibhav is too younger,wait another ${yearleft} years:`)
}



const birthYear = 1901;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

*/



/*


//TYPE CONVERSION AND COERCION
//type conversion
const inputyear = "7001";
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 18);


console.log(Number("vaibhav"));
console.log(typeof NaN);
console.log(String(22), 23);

//type coercion
console.log("i am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/


//Truthy and Falsy Values 
/*

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("VAIBHAV"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
    console.log("dont spend it all ")
}
else {
    console.log("you should get a job");

}

let height = 200
if (height) {
    console.log("yayy! height is defined");

}
else {
    console.log("height is undefined");
}


*/


// Equality Operator 


/*
const age = 18;
if (age === 18) {
    console.log("you just became an adult (strict)");
}


if (age == 18) {
    console.log("you just became an adult (loose)");
}

const fav = Number(prompt("whats your favourite number"));
console.log(fav);
console.log(typeof fav);

if (fav === 22) {
    console.log("cool ! 22 is an amzing number")
}
else if (fav === 8) {
    console.log("8 is also cool a number")
}
else if (fav === 15) {
    console.log("15 is also cool a number")
}
else {
    console.log("Number is not a 22 ,8,15")
}
if (fav !== 23) {
    console.log("why not 23");
}
*/


//logical operators
/*

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

/*if (hasDriversLicense && hasGoodVision) {
    console.log("Vaibhav is able to drive");
}
else {
    console.log("someone else should drive..")
}*/
/*
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);



if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Vaibhav is able to drive");
}
else {
    console.log("someone else should drive..")
}
*/

//switch statement
const day = "sunday";

/*
switch (day) {
    case "Monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}
*/
//if statements
/*
if (day === 'Monday') {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
}
else if (day === "tuesday") {
    console.log("Prepare theory videos");

}
else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
}

else if (day === "friday") {
    console.log("Record videos");
}
else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
}
else {
    console.log("Not a valid day");
}
*/


//statements and expressions
/*
2 + 20
1254
true && false && !false
if (10 > 1) {
    const str = "10 is bigger";
}

const me = " vaibhav";
console.log(`i am ${2021 - 2001} years old${me}`);
*/
const age = 13;
//age >= 18 ? console.log("i like to drink wine 🍷") : console.log("i like to drink water 💧")

/*
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);*/
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine 🍷";
}
else {
    drink2 = "water💧";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine 🍷" : "water 💧"} `);