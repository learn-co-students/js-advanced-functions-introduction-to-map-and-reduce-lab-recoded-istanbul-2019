// map exercises
const mapToNegativize = (array) => {
    let newArr = [];
    for (let item of array) {
        newArr.push(item * -1);
    }
    return newArr;
}
const mapToNoChange = (array) => {
    let newArr = [];
    for (let item of array) {
        newArr.push(item);
    }
    return newArr;
}
const mapToDouble = (array) => {
    let newArr = [];
    for (let item of array) {
        newArr.push(item * 2);
    }
    return newArr;
}
const mapToSquare = (array) => {
    let newArr = [];
    for (let item of array) {
        newArr.push(item * item);
    }
    return newArr;
}

mapToNegativize([1, 2, 3, -9]);
mapToNoChange(dune);
mapToDouble([1, 2, 3, -9]);
mapToSquare([1, 2, 3, -9]);

// reduce exercises
const reduceToTotal = (array, start = 0) => {
    let sum = start;
    for (let item of array) {
        sum += item;
    }
    return sum;
};
const reduceToAllTrue = (array) => {
    let newVar;
    for (let item of array) {
        if (!item) {
            newVar = false;
            break;
        } else {
            newVar = true;
        }
    }
    return newVar;
};
const reduceToAnyTrue = (array) => {
    let newVar;
    for (let item of array) {
        if (item) {
            newVar = true;
            break;
        } else {
            newVar = false;
        }
    }
    return newVar;
};