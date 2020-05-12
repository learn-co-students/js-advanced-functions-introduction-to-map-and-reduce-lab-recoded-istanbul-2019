// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}


function mapToSquare(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint) {
    let total = 0
    if (startingPoint!= undefined)
        total += startingPoint
        for (let i = 0; i < sourceArray.length; i++) {
            total += sourceArray[i]
            }
        return total
}

function reduceToAllTrue(sourceArray) {
    let value = false
    for (let i = 0; i < sourceArray.length; i++) {
        if(sourceArray[i])
        value = true
        else {
            value = false
        }
    }
    return value
}


function reduceToAnyTrue(sourceArray) {
    let value = false
    for (let i = 0; i < sourceArray.length; i++) {
        if(sourceArray[i]) 
        return true
        } 
            return false
}



