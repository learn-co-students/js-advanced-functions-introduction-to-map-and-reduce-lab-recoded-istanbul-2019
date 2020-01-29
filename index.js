// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(element => element * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(element => element)
}



function mapToDouble(sourceArray) {
    return sourceArray.map(element => element * 2)
}


function mapToSquare(sourceArray) {
    return sourceArray.map(element => element * element)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((total, element) => total + element, startingPoint);
}

// function reduceToTotal(sourceArray, startingPoint) {
//     return sourceArray.reduce((total, element) => element + total, startingPoint)
// }

function reduceToAllTrue(arr) {
    let newArr = []
    arr.forEach(element => {
        if (!element) {
            newArr.push(element)
        }
    });
    if (newArr.length > 0) {
        return false
    } else {
        return true
    }

}


function reduceToAnyTrue(arr) {
    let newArr = []
    arr.forEach(element => {
        if (!!element) {
            newArr.push(element)
        }
    });
    if (newArr.length > 0) {
        return true
    } else {
        return false
    }

}