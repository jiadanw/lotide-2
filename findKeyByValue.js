// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ( actual === expected ) {
    return `✅✅✅Assertion Passed:  ${ actual}  === ${ expected}`;
  } else {
     return `🛑🛑🛑 Assertion Failed:  ${ actual } !== ${ expected}`};
  }
 // TEST CODE
 


 const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  let a ="";
 const findKeyByValue = function(allItems,value){
    for(const item in allItems){
      if (allItems[item] === value){
        a= item;
      }
      else{ 
        a=undefined
      }
    }return a;
  }
 // return item;
 // else{}
 

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));