// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ( actual === expected ) {
    return `✅✅✅Assertion Passed:  ${ actual}  === ${ expected}`;
  } else {
     return `🛑🛑🛑 Assertion Failed:  ${ actual } !== ${ expected}`};
  }
 // TEST CODE
 console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
 
 console.log(assertEqual(1, 1));

const eqArrays = function(array1, array2){
  if (array1.length === array2.length){
  for(let i=0; i< array1.length ; i ++){
    if(array1[i]!=array2[i]){
      return false;
    }
  }return true;
  }else {return false}
}

 console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); 
 console.log(assertEqual(eqArrays([1, 2, 3], [1, 2,4]), true)); 