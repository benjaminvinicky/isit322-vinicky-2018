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

const address = () => {
    for (let attribute in something) {

    }
};