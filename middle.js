
const array=[];


const middle= function(array){
  const array2=[];
  let a = Math.floor((array.length -1 )/2);
  if(array.length%2===0){
    array2.push(array[a], array[a+1]);
    return array2;
  }
  else{array2.push(array[a]);
    return array2;}
}
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4]));