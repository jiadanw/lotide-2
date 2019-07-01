

/*const eqArrays = function(array1, array2){
  if (array1.length === array2.length){
  for(let i=0; i< array1.length ; i ++){
    if(array1[i]!=array2[i]){
      return `🛑🛑🛑 Assertion Failed:  ${ array1 } !== ${ array2}`;
    }
  } return `✅✅✅Assertion Passed:  ${ array1}  === ${ array2}`;
  }else {return `🛑🛑🛑 Assertion Failed:  ${ array1 } !== ${ array2}`}
}

 console.log(eqArrays([1, 2, 3], [1, 2, 3])); 
 console.log(eqArrays([1, 2, 3], [1, 2,4])); */



 
 const without= function(b,value){
   let array = [];
   for(let i=0; i< b.length ; i ++){
     for(let a =0; a < value.length;a++){
    if(b[i] !== value[a]){
      console.log(b[i]);
      //array.splice(i,1);
      array.push(b[i]);
    }

 }}
 return array;
};

 console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));