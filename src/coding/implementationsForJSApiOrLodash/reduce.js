Array.prototype.reduce = function(fn, start) {
  let result = start;
  for (const item of this) {
    result = fn(result, item);
  }
  return result;
};

export const lodashReduce = (array, fn, start) => {
  let result = start;
  for (const item of array) {
    result = fn(result, item);
  }
  return result;
};
