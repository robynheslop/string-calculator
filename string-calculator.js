const stringCalculator = params => {
    if (!params) return 0;
    if (typeof(params) !== "string") return "Error: not a string input";
    const arrayOfNumbersAsStrings = params.split(',');
    const sumOfNumbers = arrayOfNumbersAsStrings
            .map(number => parseInt(number))
            .reduce((a,b) => a + b);
    return sumOfNumbers;
};

export default stringCalculator;