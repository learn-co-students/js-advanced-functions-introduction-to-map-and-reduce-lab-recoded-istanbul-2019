///       my own map-like methods    ///
function mapToNegativize(sourceArray){
    let newArray = [];
    for(let i=0; i<sourceArray.length; i++){
    newArray.push(-1*sourceArray[i])
    }
    return newArray
}

function mapToNoChange(sourceArray){
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let newArray = [];
    for(let i = 0 ; i < sourceArray.length ; i++) {
        newArray.push(2 * sourceArray[i]) 
    }
    return newArray;
}

function mapToSquare(sourceArray) {
    let newArray = [];
    for(let i = 0 ; i < sourceArray.length ; i++) {
        let newElement = sourceArray[i] * sourceArray[i]
        newArray.push(newElement)
    }
    return newArray;
}

///    my own reduce-like methods    ///

function reduceToTotal(sourceArray, number = 0) {
    let total = number
    for (let i = 0 ; i < sourceArray.length ; i++) {
      total += sourceArray[i] 
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    let res = 1 
    for (let element of sourceArray) {
        res *= Boolean(element)
    }
    return Boolean(res)
}

function reduceToAnyTrue(sourceArray) {
    let res = 0
    for (let element of sourceArray) {
        res += Boolean(element)
    }
    return Boolean(res)
}