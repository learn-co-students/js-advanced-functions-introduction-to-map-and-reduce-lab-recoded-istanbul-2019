// Your code here



function mapToNegativize(array){
    return array.map(function(el){
        return el * -1;
    });
}

function mapToNoChange(array){
    return array.map(function(el){
        return el;
    });
}

function mapToDouble(array){
    return array.map(function(el){
        return el * 2;
    });
}

function mapToSquare(array){
    return array.map(function(el){
        return el * el;
    });
}
let array = [1,2,3]
let startingPoint =100;

function reduceToTotal(array, startingPoint = 0){
    return array.reduce(function(total , cValue){
        return total + cValue
    }, startingPoint)
}
function reduceToAllTrue(array){
    return array.reduce(function(total , cValue){
        if(cValue){
            return true;
        }else{
            return false
        }
    })
}
function reduceToAnyTrue(array){
    return array.reduce(function(total , cValue){
        if(cValue){
            return true;
        }else{
            return false
        }
    })
}