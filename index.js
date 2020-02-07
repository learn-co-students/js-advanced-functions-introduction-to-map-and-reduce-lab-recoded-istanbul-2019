// Your comao
function mapToNegativize(arr){
    return arr.map(e=>{
        return e * (-1)
    })
}

function mapToNoChange (arr){
    return arr
}

function mapToDouble(arr){
    return arr.map(e=> e*2)
}

function mapToSquare(arr){
    return arr.map(e=>e**2)
}

function reduceToTotal(arr,start = 0){
    return arr.reduce((t,e)=>t+=e,start)
}

function reduceToAllTrue(arr){
    return arr.reduce((b,e)=>{
        if (!e) 
        b = false
        return b
    },true)
}

function reduceToAnyTrue(arr){
    return arr.reduce((b,e)=>{
        if (e) 
        b = true
        return b
    },false)

}