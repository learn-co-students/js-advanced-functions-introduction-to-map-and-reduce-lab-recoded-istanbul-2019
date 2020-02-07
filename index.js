// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(v => {
        return v * -1;
    })
}

function mapToNoChange(sourceArray){
    return sourceArray.map(v => {
        return v;
    })
}

function mapToDouble(sourceArray){
    return sourceArray.map( v => {
      return  v * 2;
    })
}

function mapToSquare(sourceArray){
    return sourceArray.map(v => {
        return Math.pow(v,2);
    })
}

//reduce metods

function reduceToTotal(sourceArray, start=0){
    return sourceArray.reduce(function(memo, v) {
        return memo += v;
    }, start)
}

function reduceToAllTrue(sourceArray, start=true){
    return sourceArray.reduce(function(memo, v){
        if(v && memo){
            memo = true
            return memo
        } else {
            memo =false
            return memo
        }
    }, start)
}

function reduceToAnyTrue(sourceArray, start=false){
    return sourceArray.reduce(function(memo, v){
        if(v){
            memo =true;
        }
        return memo;

    }, start)
}