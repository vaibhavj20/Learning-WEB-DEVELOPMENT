/*Mark and John are trying to compare their BMI(Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
m tall.
GOOD LUCK */

//1st example

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
console.log(markBMI);
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);


//2nd example
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
console.log(markBMI);
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);*/




