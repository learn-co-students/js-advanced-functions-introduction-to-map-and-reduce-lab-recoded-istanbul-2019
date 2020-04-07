// Your code here
function mapToNegativize(arr){
  const result =[];
  for(const elm of arr){
    result.push(-1*elm);
  }
  return result;
}
function mapToDouble(arr){
  const result =[];
  for(const elm of arr){
    result.push(2*elm);
  }
  return result;
}
function mapToSquare(arr){
  const result =[];
  for(const elm of arr){
    result.push(elm**2);
  }
  return result;
}

function mapToNoChange(arr){
  return [...arr];
}

function reduceToTotal(arr,start = 0){
  let total = start;
  for (const elm of arr){
    total += elm;
  }
  return total;
}
function reduceToAllTrue(arr){
  let result = true;
  for (const elm of arr){
    result = result && !!elm;
  }
  return result;
}
function reduceToAnyTrue(arr){
  let result = false;
  for (const elm of arr){
    if(!!elm) return true;
  }
  return result;
}
