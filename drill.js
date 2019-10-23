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


function makeStudentsReport(data){
    const finalResults = [];
      for(let i = 0; i < data.length; i++){
        let blah = data[i]
        finalResults.push(`${blah.name}: ${blah.grade}`)
      }
      return finalResults;
  
  }