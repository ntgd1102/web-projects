const compose = (...fns) => {
  return (...args) => {
    const resultInArray = fns.reduceRight((acc, fn) => {
      return [fn(...acc)];
    }, args);
    return resultInArray[0];
  };
};

const async1 = (generator) => {
  const g = generator();
  let val;
  do {
    const n = g.next(val);
    if (n.done) {
      return;
    }
    val = n.value; // promise
  } while (val);
};

export const composeRunner = () => {
  const plus = (a) => (b) => b + a;
  const minus = (a) => (b) => b - a;
  const multiply = (a) => (b) => {
    const result = b * a;
    debugger;
    return result;
  };

  const result = compose(plus(5), minus(10), multiply(2));

  console.log(result(10, 2));
};

const memo = (fn) => {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Cached value is used');
    } else {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

export const throttle = (fn, wait) => {
  let timer;
  let following;
  return (...args) => {
    if (!timer) {
      fn(...args);
      const setTimer = () => {
        timer = setTimeout(() => {
          clearTimeout(timer);
          if (following) {
            fn(...following);
            following = null;
            setTimer();
          }
        }, wait);
      };
      setTimer();
    } else {
      following = args;
    }
  };
};

export const debounce = (fn, wait) => {
  let timeout = null;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};

function flat(arr, depth = 1) {
  // your implementation here
  if (depth === 0) {
    return arr;
  }

  return arr.reduce((acc, item) => {
    if (!Array.isArray(item)) {
      acc.push(item);
    } else {
      acc.push(...flat(item, depth - 1));
    }
    return acc;
  }, []);
}

// function flat2(arr, depth = 1) {
//   // your implementation here
//   if (depth === 0) {
//     return arr;
//   }
//
//   return arr.reduce((acc, item) => {
//     if (!Array.isArray(item)) {
//       return acc;
//     } else {
//       return acc.push(flat(item, depth - 1));
//     }
//   }, []);
// }

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve) => {
      const callback = function(val) {
        resolve(val);
      };
      fn(...args, callback);
    });
  };
}

const getNumberByArray = (numbers) => {
  return parseInt(numbers.join(''));
};
const creatArrayByNumber = (number) => {
  return number.toString().split('');
};

const findNextLargerPalindrome = (nums) => {
  const numbers = nums.toString().split('');
  if (numbers.length < 2) {
    return nums;
  }
  const isOdd = numbers.length % 2 === 1;
  const midIndex = numbers.length / 2;
  const firstPart = numbers.slice(0, midIndex);
  const secondPart = isOdd ?
    numbers.slice(midIndex + 1) :
    numbers.slice(midIndex);
  let dominant = getNumberByArray(
    isOdd ? numbers.slice(0, midIndex + 1) : numbers.slice(0, midIndex),
  );
  if (getNumberByArray(firstPart.reverse()) < getNumberByArray(secondPart)) {
    dominant++;
  }

  const dominantNumbers = creatArrayByNumber(dominant);
  const resultNumbers = [...dominantNumbers].reverse();
  if (isOdd) {
    resultNumbers.shift();
  }
  return getNumberByArray([...dominantNumbers, ...resultNumbers]);
};

console.log(findNextLargerPalindrome(1234));

export const run = async () => {
  const sss = await new Promise((res, rej) => {
    console.log('1232332');
    console.log([...'12312312']);
    res(2);
  })
      .then((valu) => {
        console.log(valu);
        return 13;
      })
      .then((val) => {
        console.log(val);
        return 14;
      });
  console.log(sss);

  // console.log(findNextLargerPalindrome(1234));

  // flat([1, [2], [3, [4]]]);
  //
  // const memo = (fn) => {
  //   const cache = {};
  //
  //   return function() {
  //     // eslint-disable-next-line prefer-rest-params
  //     const key = JSON.stringify(arguments);
  //     if (cache[key]) {
  //       console.log('Cached value is used', key);
  //       return cache[key];
  //     } else {
  //       // eslint-disable-next-line prefer-rest-params,no-invalid-this
  //       cache[key] = fn.apply(this, arguments);
  //       return cache[key];
  //     }
  //   };
  // };
  //
  // const fib = memo((n) => (n < 2 ? 1 : fib(n - 2) + fib(n - 1)));
  // console.log(fib(100));
  // console.log('Next call');
  // console.log(fib(100));
};

export default run;
