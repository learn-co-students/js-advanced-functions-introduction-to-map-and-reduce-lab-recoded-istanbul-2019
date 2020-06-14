// Your code here

// -------------------map()

const mapToNegativize =(sourceArray)=>{
    let negArr= sourceArray.map(function(element){
        return element*-1;
    });
    return negArr;
}

const mapToNoChange =(sourceArray)=>{
    let noCh= sourceArray.map(function(element){
        return element;
    });
    return noCh;
}

const mapToDouble =(sourceArray)=>{
    let double= sourceArray.map(function(element){
        return element*2;
    });
    return double
}
const mapToSquare =(sourceArray)=>{
    let square= sourceArray.map(function(element){
        return element**2;
    });
    return square;
}
// ----------------------------reduce()


const reduceToTotal=(array, startPoint = 0)=> {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum + startPoint;
};

const reduceToAllTrue= (array)=> {
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
const reduceToAnyTrue=(array)=> {
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