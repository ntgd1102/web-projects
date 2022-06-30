class SubjectClass {
  constructor() {
    this.observers = [];
  }

  subscribeObserver(observer) {
    this.observers.push(observer);
  }

  unsubscribeObserver(observer) {
    let index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(observer) {
    let index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers[index].notify(index);
    }
  }

  notifyAllObservers() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].notify(i);
    }
  }
}

class ObserverClass {
  notify(index) {
    console.log("Observer " + index + " is notified!");
  }
}



export const observerDemo = () => { 
  let Subject = () => {
    let observers = [];

    return {
      subscribeObserver: (observer) => {
        observers.push(observer);
      },
      unsubscribeObserver: (observer) => {
        let index = observers.indexOf(observer);
        if (index > -1) {
          observers.splice(index, 1);
        }
      },
      notifyObserver: (observer) => {
        let index = observers.indexOf(observer);
        if (index > -1) {
          observers[index].notify(index);
        }
      },
      notifyAllObservers: () => {
        for (let i = 0; i < observers.length; i++) {
          observers[i].notify(i);
        }
      },
    };
  };

  let Observer = () => {
    return {
      notify: function (index) {
        console.log("The Observer " + index + " is notified!");
      },
    };
  };

  let subject = new SubjectClass();
  let observer1 = new ObserverClass();
  let observer2 = new ObserverClass();
  let observer3 = new ObserverClass();
  let observer4 = new ObserverClass();

  subject.subscribeObserver(observer1);
  subject.subscribeObserver(observer2);
  subject.subscribeObserver(observer3);
  subject.subscribeObserver(observer4);

  subject.notifyObserver(observer2); // Observer 2 is notified!

  subject.notifyAllObservers();
}