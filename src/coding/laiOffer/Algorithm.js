export const runner = () => {
  // heapSort([2, 9, 1, 8, 4, 3, 6]);
  // const test = [4, 2, 100, 99, 10000, -1, 99, 2];
  // const result = mergeSort(test);
  // console.log(test);

  setTimeout(() => {
    console.log(1);
  }, 0);

  new Promise((res) => {
    res(2);
  }).then((res2) => {
    console.log(res2);
  });

  setTimeout(() => {
    console.log(3);
  }, 0);
};

export const heapSort = (array) => {
  for (let index = array.length - 1; index >= 0; index--) {
    heapify(array, index);
  }
};

export const heapify = (array, index) => {
  const leftChild = (index << 1) + 1;
  const rightChild = (index << 1) + 2;

  let largestNumIndex = index;
  if (leftChild < array.length && array[largestNumIndex] < array[leftChild]) {
    largestNumIndex = leftChild;
  }

  if (rightChild < array.length && array[largestNumIndex] < array[rightChild]) {
    largestNumIndex = rightChild;
  }

  if (largestNumIndex !== index) {
    const temp = array[index];
    array[index] = array[largestNumIndex];
    array[largestNumIndex] = temp;
    heapify(array, largestNumIndex);
  }
};

function mergeSort(arr) {
  const result = mergeSortHelper(arr, 0, arr.length - 1);
  for (let index = 0; index < arr.length; index++) {
    arr[index] = result[index];
  }
  return arr;
}

function mergeSortHelper(array, left, right) {
  if (array.length === 0) {
    // bug3
    return array;
  }

  if (left === right) {
    // bug4
    return [array[left]];
  }

  const midIndex = left + Math.floor((right - left) / 2);
  let leftSubArray = mergeSortHelper(array, left, midIndex);
  // bug 2
  let rightSubArray = mergeSortHelper(array, midIndex + 1, right);

  const result = [];
  while (leftSubArray.length !== 0 || rightSubArray.length !== 0) {
    if (leftSubArray.length === 0) {
      result.push(...rightSubArray);
      // bug 1
      rightSubArray = [];
    } else if (rightSubArray.length === 0) {
      result.push(...leftSubArray);
      leftSubArray = [];
    } else {
      result.push(
        leftSubArray[0] < rightSubArray[0] ?
          leftSubArray.shift() :
          rightSubArray.shift(),
      );
    }
  }
  return result;
}
