export const run = () => {
  const toBeReplaced = 'sdsd    dsds   ds';
  console.log(toBeReplaced.replace(/\s+/g, ' '));
  // output is "sdsd dsds ds" g: 是全局搜索多个 \s：是空格 +: 一个或多个
};

export default run;
