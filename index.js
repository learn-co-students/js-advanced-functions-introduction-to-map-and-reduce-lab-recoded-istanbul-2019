// Your code here
function mapToNegativize(sourceArray) {
    let arr = []
    sourceArray.forEach(element =>
        arr.push(element * -1)
    );
    console.log(arr)
    return arr
}

mapToNegativize([1, 2, 3, 4])
function mapToNoChange(sourceArray) {
    let arr = []
    sourceArray.forEach(element =>
        arr.push(element)
    );
    console.log(arr)
    return arr
}
function mapToDouble(sourceArray) {
    let arr = []
    sourceArray.forEach(element =>
        arr.push(element * 2)
    );
    console.log(arr)
    return arr
}
function mapToSquare(sourceArray) {
    let arr = []
    sourceArray.forEach(element =>
        arr.push(element * element)
    );
    console.log(arr)
    return arr
}
function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(element =>
        startingPoint = startingPoint + element)
    return startingPoint

}
function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            console.log(sourceArray[i])
            return false
        }

    }
    // sourceArray.forEach(element => {
    //     if (element === false) {
    //         console.log(element)
    //         return false
    //     }
    // })
    return true

}
function reduceToAnyTrue(sourceArray) {


    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            console.log(sourceArray[i])
            return true
        }

    }




    // sourceArray.forEach(element => {
    //     if (element === true) {
    //         console.log(element)
    //         return true
    //     }
    // })
    return false
}



reduceToAllTrue([true, false, true, false])
