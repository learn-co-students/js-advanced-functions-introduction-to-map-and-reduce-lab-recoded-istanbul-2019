// Your code here

function mapToNegativize(numbers) {
    let negativeNumbers = [];
    numbers.forEach(number => (negativeNumbers.push(-number)));
    return negativeNumbers;
}

function mapToNoChange(list) {
    let copy = [];
    list.forEach(element => (copy.push(element)));
    return copy;
}

function mapToDouble(numbers) {
    let multipliedByTwo = [];
    numbers.forEach(number => (multipliedByTwo.push(number*2)));
    return multipliedByTwo;
}

function mapToSquare(numbers) {
    let squares = [];
    numbers.forEach(number => squares.push(Math.pow(number, 2)))
    return squares;
}

function reduceToTotal(numbers, startingPoint = 0) {
    let sum = startingPoint;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function reduceToAllTrue(sourceArray) {
    for (let i of sourceArray) {
        if(i === false)
        return false;
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i of sourceArray) {
        if(i === true)
        return true;
    }
    return false;
}



