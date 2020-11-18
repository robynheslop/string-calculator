const stringCalculator = {
    add: (params) => {
        if (params === "") return 0;
        let splitStringBySeparator;
        const separatedLinesOfString = params.split("\n");
        if (separatedLinesOfString[0].substring(0, 2) === "//") {
            const separator = separatedLinesOfString[0].substring(2);
            const stringAfterSeparator = params.substring(separatedLinesOfString[0].length + 1)
            splitStringBySeparator = stringAfterSeparator.split(separator);
        } else {
            const removeLineBreaksInString = params.replace("\n", ",");
            splitStringBySeparator = removeLineBreaksInString.split(",");
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