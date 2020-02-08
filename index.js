// Your code here
const mapToNegativize = sourceArray => sourceArray.map(e => e * -1);

const mapToNoChange = sourceArray => sourceArray.map(e => e);

const mapToDouble = sourceArray => sourceArray.map(e => e * 2);

const mapToSquare = sourceArray => sourceArray.map(e => e ** 2);

const reduceToTotal = (sourceArray, startingPoint = 0) => sourceArray.reduce((memo, e) => memo + e, startingPoint);

const reduceToAllTrue = sourceArray => sourceArray.reduce((memo, e) => !!(memo && e), true);

const reduceToAnyTrue = sourceArray => sourceArray.reduce((memo, e) => !!(memo || e), false);
