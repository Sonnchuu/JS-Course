'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverlicense = true;
// if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;

// function logger() {
//     console.log('My name is Sonny');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(2, 4));

// const num = Number('23');
// console.log(num);

// FUNCTION DECLARATION
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// calcAge1(1991);
// const age1 = calcAge1(1991);
// console.log(age1);

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// ARROW FUNCTION
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// const yearsUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement2(1991, 'Sonny'));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const apple_pieces = cutFruitPieces(apples);
//     const orange_pieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${apple_pieces} piece of apple and ${orange_pieces} piece of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0){
//         return retirement;
//     }
//     else return -1;
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Sonny'));
// console.log(yearsUntilRetirement(1950, 'Bob'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2]= 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']
// const firstName= 'Sonny';
// const sony = [firstName, 'Stoyanov', 2025 - 2002, 'software engineer', friends];
// console.log(sony);

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const years2 = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years2.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Gosho');
// console.log(friends);
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

// function calcTip(bill) {
//     if(bill >= 50 && bill <= 300){
//         bill * 0.15;
//         return bill * 0.15;
//     }else{
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
// console.log(bills, tips, total);

// const Sony = {
//     firstName: 'Sonny',
//     lastName: `Stoyanov`,
//     age: 2025 - 2002,
//     job: 'software engineer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(Sony);
// console.log(Sony.lastName);
// console.log(Sony['lastName']);

// const name_key = 'Name';
// console.log(Sony['first' + name_key]);
// console.log(Sony['last' + name_key]);

// const interestedIn = prompt('What do you want to know about Sonny? Choose between firstName, lastName, age, job, and friends');
// console.log(Sony[interestedIn]);

// console.log(`${Sony.firstName} has ${Sony.friends.length} friends, and his best friend is called ${Sony.friends[0]}}`);

const Sony = {
    firstName: 'Sonny',
    lastName: `Stoyanov`,
    birthYear: 2002,
    job: 'software engineer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }
    // calcAge: function () {
    //     // console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    bio: function(){
        return `${this.firstName} is a ${this.calcAge()}- year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    },
};

console.log(Sony.bio());

