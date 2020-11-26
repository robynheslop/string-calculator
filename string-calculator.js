const stringCalculator = params => {
    if (!params) return 0;
    if (typeof(params) !== "string") return "Error: not a string input";
    const arrayOfNumbersAsStrings = params
            .replace('\n', ',')
            .split(',');
    const sumOfNumbers = arrayOfNumbersAsStrings
            .map(number => parseFloat(number))
            .reduce((a,b) => a + b);
    return sumOfNumbers;
};

export default stringCalculator;