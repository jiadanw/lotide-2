let repeatNumbers = function(data) {
  // Put your solution here
let b = "";
  for (let i=0 ; i < data.length ; i ++){
   let a = data[i][0];
   for( let c=0; c < data[i][1];c ++){
     b += a;
   } b+=" ";
  } return b;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]))