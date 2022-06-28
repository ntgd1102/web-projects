Array.prototype.map = function(fn) {
  let result = [];
  for (let item of this) {
    let processedResult = fn(item);
    result.push(processedResult);
  }
  return result;
}

export const lodashMap = (array, fn) => {
  let result = [];
  for (let item of array) {
    let processedResult = fn(item);
    result.push(processedResult);
  }
  return result;
} 

export function map(fn) {
  let result = [];
  for (let item of this) {
    let processedResult = fn(item);
    result.push(processedResult);
  }
  return result;
}
