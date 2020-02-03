// Your code here
function mapToNegativize(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*-1)
  }
  return arr2
}

function mapToNoChange(arr){
  let arr2=[...arr]
  return arr2
}

function mapToDouble(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*2)
  }
  return arr2
}

function mapToSquare(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*ele)
  }
  return arr2
}

function reduceToTotal(arr, start=0){
  let total=start
  for(let i=0; i<arr.length; i++){
    total+=parseInt(arr[i])
  }
  return total
}

function reduceToAllTrue(arr){
  for(let ele of arr){
    if(ele==false)return false
  }
  return true
}

function reduceToAnyTrue(arr){
  for(let ele of arr){
    if(ele==true)return true
  }
  return false
}
