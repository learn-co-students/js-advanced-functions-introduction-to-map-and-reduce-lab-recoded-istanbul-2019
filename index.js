// Your code here
const mapToNegativize = function (sourceArray){
    const negativeArr = [];
    for(let element of sourceArray){
        negativeArr.push(element*-1);
    }
    return negativeArr;
}

const mapToNoChange = function (sourceArray){
    const negativeArr = [];
    for(let element of sourceArray){
        negativeArr.push(element);
    }
    return negativeArr;
}

const mapToDouble = function (sourceArray){
    const negativeArr = [];
    for(let element of sourceArray){
        negativeArr.push(element*2);
    }
    return negativeArr;
}

const mapToSquare = function(sourceArray){
    return sourceArray.map(function (el){return el*el;})
}

const reduceToTotal = function (sourceArray, startingPoint = 0){
    let sum = startingPoint;
    sourceArray.forEach(function(el, index){
        sum += sourceArray[index];
    })
    return sum;
}

const reduceToAllTrue = function (sourceArray){
    let x = false;
   for (let el of sourceArray){
       if (el){
           x = true;
       }else{
           x = false;
           break;
       }
   }
    return x;
}

const reduceToAnyTrue = function (sourceArray){
   return sourceArray.reduce(function (total,current){
       if(current){
           return true;
       }else{
           return false
       }
   })
}