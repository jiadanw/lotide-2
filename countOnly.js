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



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
  
  if (itemsToCount[item]) { 
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }}
  return results;
}


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
assertEqual(result1["Fang"], 2);


