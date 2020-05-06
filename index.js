// Your code here
function mapToNegativize(sourceArray) {
    let outputArray = [];
    for (let element of sourceArray) {
        element = -element;
        outputArray.push(element);
    }
    return outputArray;
};


function mapToNoChange(sourceArray) {
    let outputArray = [];
    for (let element of sourceArray) {
        outputArray.push(element);
    }
    return outputArray;
};

function mapToDouble(sourceArray) {
    let outputArray = [];
    for (let element of sourceArray) {
        element = element * 2;
        outputArray.push(element);
    }
    return outputArray;
};

function mapToSquare(sourceArray){
    let outputArray = [];
    for (let element of sourceArray) {
        element = element ** 2;
        outputArray.push(element);
    }
    return outputArray;
};
//Remember, all map methods return a new Array.

function reduceToTotal(sourceArray, startingPoint = 0) {
    let sum = 0;
    for (let element of sourceArray) {
        sum += element;
    }
    return sum + startingPoint;
};

function reduceToAllTrue(sourceArray) {
    for (let element of sourceArray) {
        if (!element) {
            return false;
        };
    };
    return true;
};

function reduceToAnyTrue(sourceArray) {
    for (let element of sourceArray) {
        if (element) {
            return true;
        }
    }
    return false;
};
//Remember, all reduce methods return a value