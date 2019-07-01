// FUNCTION IMPLEMENTATION

   const tail = function(a){
   
     const c = a;
     c.splice(0,1);
     return c;
   };

   const assertEqual = function(array1, array2) {
    if(array1.length=== array2.length){
      for(i=0; i < array1.length ; i ++){
        if(array1[i]=array2[i]){
          return `✅✅✅Assertion Passed:  ${ array1}  === ${ array2}`;
        }}
      }  else { return `🛑🛑🛑 Assertion Failed: ${ array1 } !== ${ array2}`};
      
    }
  
 

 // TEST CODE
 
 

 
 console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]));
 console.log(assertEqual(tail([1,2,3,4]),[2]));
 console.log(assertEqual(tail([3,4,5,6]),[4,5,6]));

