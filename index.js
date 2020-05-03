function mapToNegativize(arry) {
    let newArray = [];
    for (let i = 0; i < arry.length; i++) {
        newArray.push(arry[i] * -1);
    }
    return newArray;
};
function mapToNoChange(arry) {
    let newArray = [];
    for (let i = 0; i < arry.length; i++) {
        newArray.push(arry[i]);
    }
    return newArray;
};
function mapToDouble(arry) {
    let newArray = [];
    for (let i = 0; i < arry.length; i++) {
        newArray.push(arry[i] * 2);
    }
    return newArray;
};
function mapToSquare(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(Math.pow(array[i], 2));
    }
    return newArray;
};
function reduceToTotal(array, startPoint = 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum + startPoint;
};
function reduceToAllTrue(array) {
    let trueChecker = 0,
        falseChecker = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            falseChecker += 1;
        } else {
            trueChecker += 1;
        }
    }
    if (trueChecker > 0 && falseChecker === 0) {
        return true;
    } else {
        return false;
    }
};
function reduceToAnyTrue(array) {
    let trueChecker = 0,
        falseChecker = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            falseChecker += 1;
        }
        if (array[i] === true) {
            trueChecker += 1;
        }
    }
    if (trueChecker > 0) {
        return true;
    } else {
        return false;
    }
};