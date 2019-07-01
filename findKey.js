


const findKey= function( object , fun){

  let a = Object.keys(object);
  for( let i of a) {
    if(fun(object[i])){
      return i;
    }
    
  }
}
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) )




/*

const findKey= function( obj , fun) {
  for( let key in obj){
    if(fun(key)){
      return key;
    }
  }

}
*/
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) )


