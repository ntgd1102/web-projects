export const run = () => {
  isOneBitCharacter([1, 1, 0]);
};

const canBeDecoded = function(bits) {
  let index = 0;
  const helper = () => {
    if (index === bits.length) {
      return true;
    }
    if (bits[index] === 0) {
      index++;
      if (helper()) {
        return true;
      }
    } else {
      if (index === bits.length - 1) {
        return false;
      } else {
        index += 2;
        if (helper()) {
          return true;
        }
      }
    }
    return false;
  };
  return helper();
};

const isOneBitCharacter = function(bits) {
  const length = bits.length;
  if (!bits.length || bits[bits.length - 1] !== 0) {
    return false;
  }
  if (bits.length === 1) {
    return true;
  }
  if (bits[length - 2] === 1) {
    return (
      !canBeDecoded(bits.slice(0, bits.length - 2)) &&
      canBeDecoded(bits.slice(0, bits.length - 1))
    );
  } else {
    return canBeDecoded(bits.slice(bits.length - 1));
  }
};

export default run;
