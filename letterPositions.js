// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ( actual === expected ) {
    return `✅✅✅Assertion Passed:  ${ actual}  === ${ expected}`;
  } else {
     return `🛑🛑🛑 Assertion Failed:  ${ actual } !== ${ expected}`};
  }
 // TEST CODE




  



const letterPositions = function (sentence){
  const results = {};
  for (let index in sentence){

    if (!results[sentence[index]]){
      
      results[sentence[index]] = [index];
      //results[sentence[index]] = [];
    //results[sentence[index]].push( index);
  }
    else{
      
       results[sentence[index]].push(index);
    }
  } return results;

}

console.log(letterPositions("lighthouse in the house")); 

