/*1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'*/



let Continent = "Asia";
let country = 'India';
let Population = 1.366;
let Language = "Hindi";
console.log(Population / 2);
Population++;
console.log(Population++);

console.log(Population > 6);
console.log(Population < 33);

let description =
    country +
    " is in " +
    Continent +
    ", and its " +
    Population++ +
    " million people speak " +
    Language;
console.log(description);
