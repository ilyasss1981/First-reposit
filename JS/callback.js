'use strict';

// function start1() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
    
// }

// function start2() {
//     console.log(2);
// }

// start1();
// start2();

// ------------------------------------CALLBACK---------------------------------

// function learnJS(number, callback) {    
//     console.log(number);
//     callback();
// }
// learnJS(1, function() {
//     console.log(2);
// });

// -------------------------------------Objects-----------------------------------

const options = {
    name: 'Test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(Object.keys(options).length);

const {border, bg} = options.colors;   //Деструктуризация
console.log(border);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`У свойства ${i} значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`У свойства ${key} значение ${options[key]}`);
//         counter++;
//     }    
// }
// console.log(counter);