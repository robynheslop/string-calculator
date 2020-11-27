const stringCalculator = params => {
    if (!params) return 0;
    if (typeof(params) !== "string") return "Error: not a string input";
    if (params.search(",\n") !== -1) return `Error: number expected but \n found at position ${(params.search(",\n") + 2)}`;
    const arrayOfNumbersAsStrings = params
            .replace('\n', ',')
            .split(',');
    const sumOfNumbers = arrayOfNumbersAsStrings
            .map(number => parseFloat(number))
            .reduce((a,b) => a + b);
    return sumOfNumbers;
};

export default stringCalculator;