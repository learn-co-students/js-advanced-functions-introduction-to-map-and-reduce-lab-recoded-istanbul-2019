// Your code here
/////////////////map-like////////////////////////
const mapToNegativize=(sourceArray)=>{
    let resaultArray=[];
    sourceArray.forEach(element =>resaultArray.push(element*-1))
    return resaultArray;    
}
const mapToNoChange=(sourceArray)=>{return [...sourceArray]}
const mapToDouble =(sourceArray) =>{
    let doubledArray=[];
    sourceArray.forEach(element =>doubledArray.push(element*2))
    return doubledArray;
}
const mapToSquare=(sourceArray)=>{
    let squared=[];
    sourceArray.forEach(element =>squared.push(element*element))
    return squared;
}
/////////////////reduce-like////////////////////////
const reduceToTotal=(sourceArray, startingPoint=0)=>{
    sourceArray.forEach(element =>startingPoint+=element)
    return startingPoint;
}
const reduceToAllTrue=(sourceArray)=>{return sourceArray.every(element =>Boolean(element)=== true)};
const reduceToAnyTrue=(sourceArray)=>{return sourceArray.some(element =>Boolean(element)=== true)};




