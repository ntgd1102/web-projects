export const run = () => {
  const transferArrayToObject = (a2rray) => {
    const newObject = {};
    const key = a2rray[0];
    const value = a2rray[1];
    newObject[key] = value;
    return newObject;
  };

  const returnValue = transferArrayToObject([0, 1]);
  console.log(returnValue);
};

export default run;
