// Your code here

function mapToNegativize(sourceArray) {
    return sourceArray.map(function(x){
        return x * -1;
    })
};


function mapToNoChange(sourceArray) {
    return sourceArray.map(function(x){
        return x;
    })
}


function mapToDouble(sourceArray) {
    return sourceArray.map(function(x){
        return x * 2;
    })
}


function mapToSquare(sourceArray) {
    return sourceArray.map(function(x){
        return x * x;
    })
}


///////


function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(function(num, value) {
        return num + value
    }, startingPoint)
}


function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function(num, value) {
        if (value) {
            return true;
        } else{
            return false;
        }
    })
}


function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce(function(num, value) {
        if (value) {
            return true;
        } else{
            return false;
        }
    })
}