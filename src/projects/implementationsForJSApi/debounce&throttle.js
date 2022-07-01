export function debounce(fn, delay) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      debugger;
      fn(...args);
    }, delay);
  };
}

// throttle(func, delay) will return a throttled function, which will invoke the func at a max frequency no matter how throttled one is called.
export function throttle(func, wait) {
  // your code here
  let shouldWait = false;
  let latestArgs = null;
  const timeout = () =>
    setTimeout(() => {
      shouldWait = false;
      if (latestArgs) {
        shouldWait = true;
        func(...latestArgs);
        latestArgs = null;
        timeout();
      }
    }, wait);

  return function (...args) {
    if (!shouldWait) {
      shouldWait = true;
      func(...args);
      timeout();
    } else {
      latestArgs = args;
    }
  };
}
