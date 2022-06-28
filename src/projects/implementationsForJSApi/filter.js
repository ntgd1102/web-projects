Array.prototype.filter = function (fn) {
  let result = [];
  for (let item of this) {
    if (fn(item)) result.push(item);
  }
  return result;
};

export function filter(fn) {
  let result = [];
  for (let item of this) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
}

export const filterWithoutThis = (array, fn) => {
  let result = [];
  for (let item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
}

