const tail = function(a){
   
  const c = a;
  c.splice(0,1);
  return c;
};
console.log(tail([1,2,3]));