// Your code here
function mapToNegativize(sourceArray){
  let newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]*-1);
  }
  return newArray;
}
function mapToNoChange(sourceArray){
  let newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]);
  }
  return newArray;
}
function mapToDouble(sourceArray){
  let newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]*2);
  }
  return newArray;
}
function mapToSquare(sourceArray){
  let newArray = [];
  for(let i = 0;i<sourceArray.length;i++){
    newArray.push(sourceArray[i]*sourceArray[i]);
  }
  return newArray;
}
function reduceToTotal(sourceArray, startingPoint){
  let total = 0;
  if(startingPoint!=undefined)
    total += startingPoint;
  for(let i = 0;i<sourceArray.length;i++){
    total += sourceArray[i];
  }
  return total;
}
function reduceToAllTrue(sourceArray){
  let val = false;
  for(let i = 0;i<sourceArray.length;i++){
    if(sourceArray[i])
      val = true;
    else {
        val = false;
      }
   }

return val;

}
function reduceToAnyTrue(sourceArray){
  let val = false;
  for(let i = 0;i<sourceArray.length;i++){
    if(sourceArray[i])
      return true;
   }
   return false;
}
