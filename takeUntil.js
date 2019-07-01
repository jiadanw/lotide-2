







const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const getIndex = function (callback, array) {
  for (index = 0; index < array.length; index++) {
    if (callback(array[index])) {
      return index
    };

  }
}
const takeUntil= function( array, callback){
   answer= [];
   for(i = 0; i < getIndex(callback, array);i ++){

     answer.push( array[i]);

   }return answer;

}   


console.log(takeUntil(data2, x => x === "to"));

const comparisonCallback = function(value) {
  return value.length > 7;
}

console.log(takeUntil(data2, comparisonCallback))

console.log(takeUntil(data2, function(value) {
  return value.length > 7;
}))


/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data1, x => x === ',');
console.log(results2);


const takeUntil = function(data, value){
  let answer = [];


  for( item of data){
    if(data === value){


    }
  }
} */