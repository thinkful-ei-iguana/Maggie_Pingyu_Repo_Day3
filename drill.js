'use strict';

function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello: function() {
            return 'hello';
        }
    }
}

console.log(createMyObject());


const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
};

function keyDeleter(obj) {
    delete sampleObj.foo
    delete sampleObj.bar
    return sampleObj
}



function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        // replace `null` with a function that uses self reference to return
        // full name
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    return person;
}

function makeStudentsReport(data) {
    const finalResults = [];
    for (let i = 0; i < data.length; i++) {
        let blah = data[i]
        finalResults.push(`${blah.name}: ${blah.grade}`)
    }
    return finalResults;

}

const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
    // your code here
    return items.find(function(ele) {
        if (idNum === ele.id) {
            return ele;
        }
    })
}

//

function testIt() {
    const testData = [
        { id: 1, foo: 'bar' },
        { id: 2, foo: 'bizz' },
        { id: 3, bang: 'boo' },
    ];
    const result = findById(testData, 3);
    if (!(result && result !== null && typeof result === 'object')) {
        console.error('`findById` must return an object');
        return;
    }
    if (result.id !== 3) {
        console.error(
            'Asked for item with id of `3` but got back one with id of ' + result.id
        );
        return;
    }
    if (result.bang !== 'boo') {
        console.error(
            'Expected all key/value pairs from target object to be returned'
        );
        return;
    }
    console.log('SUCCESS: `findByid` is working');
}

testIt();



const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    let arr = [];
    for (let i = 0; i < students.length; i++) {
      let individual = students[i];
      individual.status = 'In Summer school';
      arr.push(individual);
    }
    return(arr);
  }