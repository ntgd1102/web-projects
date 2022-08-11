export const cloneDeep = (data) => {
  const visitMap = {};
  const clone = (data, visitMap) => {
    if (data === null || typeof data !== 'object') {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map((item) => {
        clone(item, visitMap);
      });
    }

    const newObj = {};

    for (const key of data.keys()) {
      const val = data[key];
    }
  };
};

function executeForPromiseWithDelay(config, cb) {
  return new Promise(function(resolve, reject) {
    function execute() {
      const original = cb();
      original.then(
          function(e) {
            resolve(e);
          },
          function(e) {
            const delay = config.delays.shift();
            if (delay && config.handleFn(e)) {
              setTimeout(execute, delay);
            } else {
              reject(e);
            }
          },
      );
    }

    execute();
  });
}
