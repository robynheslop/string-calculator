const stringCalculator = {
    add: (params) => {
        if (params === "") return 0;
        let splitStringBySeparator;
        const separatedLinesOfString = params.split("\n");
        if (separatedLinesOfString[0].substring(0, 2) === "//") {
            let separator = params.substring(2, 3);
            let calculationString = params.substring(3);
            splitStringBySeparator = calculationString.split(separator);
        } else {
            const noNewLinesInString = params.replace("\n", ",");
            splitStringBySeparator = noNewLinesInString.split(",");
        }
        const arrayOfNumberValues = splitStringBySeparator.map(number => parseInt(number));
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