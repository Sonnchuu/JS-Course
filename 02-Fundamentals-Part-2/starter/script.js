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

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(2, 4));