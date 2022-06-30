

var printer = (function () {
  var printerInstance;

  function create() {
    function print() {
      // console.log("222");
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn,
    };
  }

  return {
    getInstance: function () {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    },
  };
})();

export class Singleton {
  constructor(msg) {
    if (Singleton.singleton) {
      return Singleton.singleton;
    }

    this.msg = msg;
    Singleton.singleton = this;
    return Singleton.singleton;
  }

  print() {
    console.log(this.msg);
  }
}
