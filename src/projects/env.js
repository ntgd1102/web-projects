function* generator() {
    yield 1;
    yield 2;
    yield 3;

}

class NewCar {
    constructor() {
        this.size = 4;
    }

    run() {
        console.log(`a car of size${this.size} is running`);
    }
}

export const run = () => {

     var c = 10;
    function edit() {
        console.log(c);
           var c = 20; 
    }
    edit();
    // 2 // -> closure
console.log(c)

}
