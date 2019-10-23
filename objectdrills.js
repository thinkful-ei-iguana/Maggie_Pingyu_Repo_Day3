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