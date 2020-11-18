const stringCalculator = {
    add: (params) => {
        if (params === "") return 0;
        const noNewLinesInString = params.replace("\n", ",");
        const splitByCommaArray = noNewLinesInString.split(",");
        const arrayOfNumberValues = splitByCommaArray.map(number => parseInt(number));
        const filteredOutLargeNumbers = arrayOfNumberValues.filter(number => number <= 1000);
        const negativeNumbers = filteredOutLargeNumbers.filter(number => number < 0 ? number : null);
        if (negativeNumbers.length > 0) {
            return `negatives are not allowed: ${negativeNumbers}`
        }
        const sumOfArrayOfNumbers = filteredOutLargeNumbers.reduce((a, b) => a + b);
        return sumOfArrayOfNumbers;
    }
}

export default stringCalculator;