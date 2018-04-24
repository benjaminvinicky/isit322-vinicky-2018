const mathResult = () => {
    console.log((4+6)*12)
};

((numbers) => {
    numbers.forEach((number) => {
        console.log(numbers)
    })
})([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

let primeNumbers = (numbers) => {
    for (let number of numbers) {
        console.log(numbers)
    }
};
let primeArray = ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
primeNumbers(primeArray);

const myObjects = { firstName: 'Benjamin', lastName: 'Vinicky', address: '1020 108 AVE NE APT#1305', city: 'Bellevue', state: 'WA', zip: '98004'}
const address = () => {
    for (let property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(property);
        }
    }
};

class Calculator {
    add(operanda, operandab) {
        return this.operanda + this.operandb;
    }
    subtract(operanda, operandab) {
        return this.operanda - this.operandb;
    }
    multiply(operanda, operandab) {
        return this.operanda * this.operandb;
    }
    divide(operanda, operandab) {
        return this.operanda / this.operandb;
    }s
}

var calculator = new Calculator();
console.log(calculator.add(2,3));
console.log(calculator.subtract(5,2));
console.log(calculator.multiply(3,5));
console.log(calculator.divide(15,3));