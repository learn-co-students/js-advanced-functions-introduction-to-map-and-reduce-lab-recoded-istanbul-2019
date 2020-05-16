// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(array=>array*(-1));
}

function mapToNoChange(sourceArray){
  return sourceArray.map(array=>array);
}


function mapToDouble(sourceArray){
    return sourceArray.map(array=>array*2);
}



function mapToSquare(sourceArray){
    return sourceArray.map(array=>array**2);
}



function reduceToTotal(sourceArray, startingPoint=null){
    let total = (accumulator, currentValue) => accumulator + currentValue;
    return sourceArray.reduce(total, startingPoint)
}

function reduceToAllTrue(sourceArray,startingPoint=true){
  return sourceArray.reduce(function(accumulator, currentValue){
   if(accumulator && currentValue){
     return true;
   }else{
     return false ;
   }
  },startingPoint)
}




function reduceToAnyTrue(sourceArray,startingPoint=null){
  return  sourceArray.reduce(function(tot, curr){
    if(curr){
      return true;
    }
    return false;
  },startingPoint);
}
