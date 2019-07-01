// FUNCTION IMPLEMENTATION
/*const assertEqual = function(actual, expected) {
  if ( actual === expected ) {
    return `✅✅✅Assertion Passed:  ${ actual}  === ${ expected}`;
  } else {
     return `🛑🛑🛑 Assertion Failed:  ${ actual } !== ${ expected}`};
  }
 // TEST CODE*/
 const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  //console.log(`Example label: ${inspect(actual)}`);
  return inspect(actual);
};


 const cd = { c: "1", d: ["2", 3] };
 const dc = { d: ["2", 3], c: "1" };
 const nd = { d: ["2", 3], c: "1" };
 
 const cd2 = { c: "1", d: ["2", 3, 4] };
 
 const eqArrays = function(array1, array2){
  if (array1.length === array2.length){
  for(let i=0; i< array1.length ; i ++){
    if(array1[i]!=array2[i]){
      return false;
    }
  }return true;
  }else {return false}
}

 const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length!==Object.keys(object2).length){
        return false;
    }
    for(item of Object.keys(object1))
 
   
  if (eqArrays(Object.keys(object1),Object.keys(object2))){
      return true;
      for(const item in object1){
      if(object1[item]===object2[item]){
        return true;
      }
    }return false; 
    }else {return false}
  }
  
console.log(assertObjectsEqual(eqObjects(cd,dc),true));
console.log(assertObjectsEqual(eqObjects(nd,dc),true));

