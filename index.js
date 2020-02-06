// Your code here
array=[1, 2, 3, -9];
function mapToNegativize(sourceArray){
  return sourceArray.map(e => {return -e});
}

mapToNegativize(array);

function mapToNoChange(sourceArray){
  return sourceArray.map(e => {return e});
}

mapToNoChange(array);

function mapToDouble(sourceArray){
  return sourceArray.map(e => {return e*2});
}

mapToDouble(array);

function mapToSquare(sourceArray){
  return sourceArray.map(e => {return e*e});
}

mapToSquare(array);



sourceArray=[1, 2, 3, 9];
function reduceToTotal(sourceArray, startingPoint)
{ 
  if(startingPoint===undefined)
 { startingPoint=0;}
  return sourceArray.reduce(function(e,total)
  {
    return total+e;
  },startingPoint)
}

function reduceToAllTrue(sourceArray){
//   return sourceArray.reduce(function(e,value){
// console.log(typeof(e))
//     if(typeof(e)=="string")
//   return (true  && value);
//   //   if(e===null)//null
//   //   return false;
//   //   else if(e.length!==undefined)//string
//   // return total;
//   //   else if(e===0)//0
//   //   return false;
//   //   else return total;//numbers no 0
//     return (e && value);   //&&
//   })

for(let e of sourceArray)
if(e==false)
return false
return true
}

function reduceToAnyTrue(sourceArray){
  
  // return sourceArray.reduce(function(e,value){
    
  //   // if(e===null)return (false && value);
     
  //   // else if(e.length!==undefined)
  //   //   return false;
  //   // else if(e===0)
  //   //   return false;
  //   // else 
  //   //   return true;
  //     return (e || value);
  // })
  for(let e of sourceArray)
if(e==true)
return true
return false
}





