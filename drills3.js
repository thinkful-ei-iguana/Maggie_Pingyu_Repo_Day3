'use strict';

/*
const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (loaf.water / loaf.flour) * 100;

    }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());


const obj = {
    foo: 'foo',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam'
}

for (let prop in obj) {
    console.log(obj[prop]);
}



const newerObj = {
    meals: ['breakfast', 'second breakfast', 'elevensies', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

let final = newerObj.meals
console.log(final[3])


// 4
const arr = [{ job: 'server', name: 'jack' }, { job: 'dishwasher', name: 'john' },
    { job: 'cook', name: 'joe' }
]

arr.map(prop => {
    console.log(prop.job + ": " + prop.name);
})



const array = [{ job: 'server', name: 'jack' }, { job: 'dishwasher', name: 'john', boss: 'pingyu' },
    { job: 'cook', name: 'joe', boss: 'maggie' }
]

array.map(prop => {

    if (prop.hasOwnProperty('boss')) {
        console.log(`${prop.job} ${prop.name} reports to ${prop.boss}.`);
    } else {
        console.log(`${prop.job} ${prop.name} doesn't report to anybody.`);
    }
})
console.log(arr.map);
*/

const codeObject = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};

let result = '';

const msg = 'craft block argon meter bells brown croon droop';
let ary = msg.split(' ');
console.log(ary);

for (let i = 0; i < ary.length; i++) {
    let word = ary[i];
    let letter = word[0];
    console.log(letter);
    let index = codeObject[letter];
    console.log(index);
    let ltr = word[index - 1];
    console.log(ltr);
    if (codeObject.hasOwnProperty(letter)) {
        result += ltr;
    } else {
        result += ' ';
    }
}

console.log(result);