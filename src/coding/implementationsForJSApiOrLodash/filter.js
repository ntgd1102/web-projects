Array.prototype.filter = function(fn) {
  const result = [];
  for (const item of this) {
    if (fn(item)) result.push(item);
  }
  return result;
};

export function filter(fn) {
  const result = [];

  for (const item of this) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
}

export const filterWithoutThis = (array, fn) => {
  const result = [];
  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
};
