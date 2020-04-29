// Your code here
const arr = [1, 2, 3, -9];
const mapToNegativize = function(array) {
    return array.map(function(elment) {
    console.log(elment);
    return elment * -1
})
}
 console.log(mapToNegativize(arr));

 const mapToNoChange = function(array) {
     return array.map(function(elment) {
         return elment
     })
 }
 console.log(mapToNoChange(arr));

 const mapToDouble = function(array) {
     return array.map((elment) =>  elment * 2)
 }
 console.log(mapToDouble(arr));

 const mapToSquare = (array) => array.map((elment) => elment ** 2);
 console.log(mapToSquare(arr));


//---------------- REDUCE ---------------------------//
const reduceArr = [1, 2, 3];
let init = 100;
 const reduceToTotal = function(array, init = 0) {
    return array.reduce(function(total, elment) {
        return elment + total 
    }, init)
 }
 console.log(reduceToTotal(reduceArr));
//  let reduceToTotal = reduceArr.reduce((acc, val) => acc + val, 100)

function reduceToAllTrue(array) {
    return array.reduce(function (acc, val) {
        if (val) {
            return true;
        }else {
            return false;
        }
    })
}


function reduceToAnyTrue(array) {
    return array.reduce(function (acc, val) {
        // if (val) {
        //     return true;
        // }else {
        //     return false;
        // }
        (val) ? true : false;
    })
}




 
