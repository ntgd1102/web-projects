Array.prototype.map = function(fn) {
  const result = [];
  for (const item of this) {
    const processedResult = fn(item);
    result.push(processedResult);
  }
  return result;
};

export const lodashMap = (array, fn) => {
  const result = [];
  for (const item of array) {
    const processedResult = fn(item);
    result.push(processedResult);
  }
  return result;
};

export function map(fn) {
  const result = [];
  for (const item of this) {
    const processedResult = fn(item);
    result.push(processedResult);
  }
  return result;
}
