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

<<<<<<< HEAD
function makeStudentsReport(data) {
    // your code here

}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   Nothing to see here!
   
*/

// tests
=======

function makeStudentsReport(data){
    const finalResults = [];
      for(let i = 0; i < data.length; i++){
        let blah = data[i]
        finalResults.push(`${blah.name}: ${blah.grade}`)
      }
      return finalResults;
  
  }
<<<<<<< HEAD
>>>>>>> dc90a24ef210544c1d85d6c711504b7805d5d7af
=======



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
>>>>>>> b1c5a79b27c609d619ff00e1638fece84d9e2291
