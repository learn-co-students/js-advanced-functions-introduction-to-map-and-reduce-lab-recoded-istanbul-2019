// Your code here

function mapToNegativize(sourceArray){
    return sourceArray.map(num => -num)
}
function mapToNoChange(sourceArray){
    return sourceArray.map(num => num)
}
function mapToDouble(sourceArray){
    return sourceArray.map(num => num * 2)
}
function mapToSquare(sourceArray){
    return sourceArray.map(num => num * num)
}

function reduceToTotal(sourceArray){
    return sourceArray.reduce((accc, ccuVal) =>{
        return  accc + ccuVal;
    })
}
function reduceToTotal(sourceArray, startingPoint){
    return sourceArray.reduce((acc, cuVal) =>{
        return  acc + cuVal;
    }, 100)
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i] == false) return false
    }
    return true
  }

  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i] == true) return true
    }
    return false
  }