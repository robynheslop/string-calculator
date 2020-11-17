const stringCalculator = {
    add: (params) => {
        if (params === "") return 0;
        const arrayOfNumbers = params.split(",");
        const arrayOfNumberValues = arrayOfNumbers.map(number => parseInt(number));
        const sumOfArrayOfNumbers = arrayOfNumberValues.reduce((a, b) => a + b);
        return sumOfArrayOfNumbers;
    }
}

export default stringCalculator;