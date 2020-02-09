// Your code here
function mapToNegativize(arr){
    let newArr = []
    for(let elem of arr){
        elem = -elem
        newArr.push(elem)
    }

    return newArr
}

function mapToNoChange(arr){
    let newArr = []
    for(let elem of arr){
        newArr.push(elem)
    }
    return newArr
}

function mapToDouble(arr){
    let newArr = []
    for(let elem of arr){
        elem = elem*2
        newArr.push(elem)
        //learn did not accept using newArr.push(elem*2)
    }
    return newArr
}

function mapToSquare(arr){
    let newArr = []
    for(let elem of arr){
        elem = elem**2
        newArr.push(elem)
    }
    return newArr
}

function reduceToTotal(arr,lePointDeDepart=0){
    let sum = 0;
    for (let elem of arr){
        sum +=elem
    }
    return sum + lePointDeDepart

}

function reduceToAllTrue(arr){
    let sum = 1
    for(let elem of arr){
        sum *= Boolean(elem)
        }
      return Boolean(sum)
    
}


function reduceToAnyTrue(arr){
    let sum = 0
    for(let elem of arr){
        sum += Boolean(elem)
        }
      return Boolean(sum)
    
}









