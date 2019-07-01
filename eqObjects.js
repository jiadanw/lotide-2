// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if ( actual === expected ) {
    return `✅✅✅Assertion Passed:  ${ actual}  === ${ expected}`;
  } else {
     return `🛑🛑🛑 Assertion Failed:  ${ actual } !== ${ expected}`};
  }
 // TEST CODE
 

 const cd = { c: "1", d: ["2", 3] };
 const dc = { d: ["2", 3], c: "1" };
 const nd = { d: ["2", 3], c: "1" };
 
 const cd2 = { c: "1", d: ["2", 3, 4] };
 
const eqArrays = function(array1, array2){
    if (array1.length === array2.length){
      for(let i=0; i< array1.length; i ++){
        if(array1[i] != array2[i]) {
          return false;
        }
      }
      return true;
    }
    else {
      return false
    }
  }

 const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  } 
  else {
    if(eqArrays(Object.keys(object1), Object.keys(object2))){
      for (item of object1[key]) {
        if(array.isArray(object1[key]) && array.isArray(object2[key])) {
          if (!eqArrays(object1[key],object2[key])){
            return false;
          }
        }
        else if (object1[key] !== object2) {
          return false;
        }
        else {
          return true
        }
      }
    }
  }
}
    
  
 // for in
   
 
// console.log(assertEqual(eqObjects(cd,dc),true));
// console.log(assertEqual(eqObjects(nd,dc),true));
// console.log(Object.keys(dc))
// console.log(Object.keys(nd))

// console.log(Object.keys(cd))
// console.log(Object.keys(cd).sort === Object.keys(dc).sort

