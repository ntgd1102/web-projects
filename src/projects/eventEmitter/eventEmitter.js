// eslint-disable-next-line max-classes-per-file
class Publisher {
  constructor(eventEmitter) {
    this.emitter = eventEmitter;
  }

  triggerEvent() {
    this.emitter.emit('event type', 'event data');
  }
}

class Subscriber {
  eventHandler(data) {
    console.log(data);
  }
}

class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(eventType, eventListener) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(eventListener);
  }

  unsubscribeObserver(eventType, eventListener) {
    if (!this.listeners[eventType]) {
      return;
    }
    const index = this.listeners[eventType].indexOf(eventListener);
    this.listeners[eventType].splice(index, 1);
  }

  emit(eventType, data) {
    const eventListeners = this.listeners[eventType];
    if (eventListeners) {
      for (const eventListener of eventListeners) {
        eventListener.eventHandler(data);
      }
    }
  }
}

export const demo = () => {
  const emitter = new EventEmitter();
  const subscriber = new Subscriber();
  emitter.on('event type', subscriber);
  const publisher = new Publisher(emitter);
  publisher.triggerEvent();
  const sdsd = printer.getInstance();
  sdsd.print();
};

var printer = (function () {
  let printerInstance;

  function create() {
    function print() {
      console.log('222');
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print,
      turnOn,
    };
  }

  return {
    getInstance() {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    },
  };
}());
