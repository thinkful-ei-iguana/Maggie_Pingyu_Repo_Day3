'use strict';


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

arr.map(obj => {
    console.log(obj.job + ": " + obj.name);
})