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



 const countLetters = function(itemsToCount) {
  const results = {};
itemsToCount
  for (const item of itemsToCount) {
    console.log(item);
  
    if(item!==" "){
      if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  
}return results;
}

let i = countLetters("lighthouse in the house");
console.log(i);
