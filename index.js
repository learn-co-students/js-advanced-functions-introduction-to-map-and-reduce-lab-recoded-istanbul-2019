// Your code here
const mapToNegativize = function (arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i ++) {
        newArr.push(arr[i]*-1)
    }
    return newArr;
}


const mapToNoChange = function (arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i ++) {
        newArr.push(arr[i])
    }
    return newArr;
}


const mapToDouble = function (arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i ++) {
        newArr.push(arr[i]*2)
    }
    return newArr;
}

const mapToSquare = function (arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i ++) {
        newArr.push(arr[i]**2)
    }
    return newArr;
}

const reduceToTotal = function (arr, starttingPoint = 0) {
    for (let i = 0; i < arr.length; i ++) {
        starttingPoint += arr[i];
        }
    return starttingPoint;
}


const reduceToAllTrue = function (targetArr) {
    let temp = false;
    for (let i = 0; i < targetArr.length; i++ ) {
        if (targetArr[i]) {
            temp = true;
        }else {
            temp = false
        }
    }
    return temp;
}

const reduceToAnyTrue = function (targetArr) {
    let temp = true;
    for (let i = 0; i < targetArr.length; i++ ) {
        if (!targetArr[i]) {
            temp = false;
        }else {
            temp = true
        }
    }
    return temp;
}