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
    // your code here

}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   Nothing to see here!
   
*/

// tests