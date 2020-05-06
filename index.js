// Your code here
function mapToNegativize(sourceArray) {
  let newArr = [];
  sourceArray.forEach(element => {
    newArr = [...newArr, -element];
  });
  return newArr;
}

function mapToNoChange(sourceArray) {
  let newArr = [];
  sourceArray.forEach(element => {
    newArr = [...newArr, element];
  });
  return newArr;
}

function mapToDouble(sourceArray) {
  let newArr = [];
  sourceArray.forEach(element => {
    newArr = [...newArr, element * 2];
  });
  return newArr;
}

function mapToSquare(sourceArray) {
  let newArr = [];
  sourceArray.forEach(element => {
    newArr = [...newArr, element * element];
  });
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  sourceArray.forEach(element => {
    startingPoint += element;
  });
  return startingPoint;
}

function reduceToAllTrue(sourceArray) {
  let condition;
  sourceArray.forEach(element => {
    if (element) {
      condition = true;
    } else {
      condition = false;
    }
  });
  return condition;
}

function reduceToAnyTrue(sourceArray) {
  let condition;
  sourceArray.forEach(element => {
    if (element) {
      condition = true;
    } else {
      condition = false;
    }
  });
  return condition;
}