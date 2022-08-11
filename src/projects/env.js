export const run = () => {
  // const toBeReplaced = 'sdsd    dsds   ds';
  // console.log(toBeReplaced.replace(/\s+/g, ' '));
  // output is "sdsd dsds ds" g: 是全局搜索多个 \s：是空格 +: 一个或多个
  // const extend = function(obj, extension) {
  //   if (typeof obj === 'object' && extension.constructor === Array) {
  //     for (const i in extension) {
  //       if (extension.hasOwnProperty(i) && !obj.hasOwnProperty(i)) {
  //         obj[i] = extension[i];
  //       }
  //     }
  //     return obj;
  //   }
  // };
  //
  // extend({ a: 'b' }, [2, 3, 4]);
  // eslint-disable-next-line no-extend-native
  // Function.prototype.bind = function(context) {
  //   const fn = this;
  //   return (...arg) => fn.call(context, ...arg);
  // };
  //
  // function test(b, c) {
  //   // eslint-disable-next-line no-invalid-this
  //   console.log(this.a);
  //   console.log(b);
  //   console.log(c);
  // }
  //
  // const fn = test.bind({ a: 'Hello ' });
  //
  // fn(1, 2);
};

const isPalindrome = function(s) {
  if (s.length <= 1) return true;
  // process the string
  const str = s.replace(/[^a-z0-9A-Z]/gi, '').toLowerCase();
  const left = 0;
  const right = str.length - 1;
  if (str[left] === str[right]) {
    return isPalindrome(s.slice(1, s.length - 1));
  } else {
    return false;
  }
  return true;
};

export default run;
