export const groupBy = (array, criteria) => {
  const map = new Map();
  const isFun = typeof criteria === 'function';
  array.forEach((item) => {
    const key = isFun ? criteria(item) : item[criteria];
    if (!map.get(key)) {
      map.set(key, []);
    }
    map.get(key).push(item);
  });
  return map;
};

export const groupBy2 = (array, criteria) => {
  const isFn = typeof criteria === 'function';
  return array.reduce((acc, item) => {
    const key = isFn ? criteria(item) : item[criteria];
    if (acc.hasOwnProperty(key)) {
      acc[key] = [];
    }
    acc[key].push(item);
  }, {});
};
