// Your code here
function mapToNegativize(sourceArray){
let newArr= [];
for(let i=0; i<sourceArray.length; i++){
    newArr.push(-1*sourceArray[i])
}
return newArr;
}

function mapToNoChange(sourceArray){
    let newArr=[];
    for(let i=0; i<sourceArray.length; i++){
    newArr.push(sourceArray[i])    
    }
    return sourceArray;
}

function mapToDouble(sourceArray){
    let newArr=[];
    for(let i=0; i<sourceArray.length; i++){
        newArr.push(2*sourceArray[i])
    }
    return newArr;
}

function mapToSquare(sourceArray){
    let newArr=[];
    for(let i=0; i<sourceArray.length; i++){
    newArr.push(sourceArray[i]*sourceArray[i])
}
return newArr; 
}
  
//      sourceArray = [1,2,3]
function reduceToTotal(sourceArray, number=0){
    let total= number;
    for(let i=0; i<sourceArray.length; i++){
    total+=sourceArray[i]
    }
    return total
}
//returns true when all values are truthy
//returns false when any value is falsy
function reduceToAllTrue(sourceArray){
    for(let i=0; i<sourceArray.length; i++) {
        if(! sourceArray[i])  return false
        }
            return true 
    }

//returns true when a true value is present
//returns false when no true value is present
function reduceToAnyTrue(sourceArray){
    for(let i=0; i<sourceArray.length; i++){
        if(sourceArray[i])  return true
    }
    return false
}