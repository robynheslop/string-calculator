const stringCalculator = params => {
    if (!params) return 0;
    if (typeof (params) !== "string") return "Error: not a string input";

    let separator;
    let arrayOfNumbersAsStrings;

    if (params.startsWith("//")) {
        separator = params.slice(2, (params.indexOf("\n")));
        let calculationString = params.slice((params.indexOf("\n") + 1));
        if (params.endsWith(separator)) return "Error: number expected but EOF found";
        if (calculationString.match(RegExp(`[^${separator}^0-9]`))) {
            const wrongCharacter = calculationString.match(RegExp(`[^${separator}^0-9]`));
            const wrongCharacterIndex = wrongCharacter.index + params.slice(0, (params.indexOf("\n"))).length + 2
            if (wrongCharacter) return `Error: '${separator}' expected but '${wrongCharacter}' found at position ${wrongCharacterIndex}.`;
        }
        arrayOfNumbersAsStrings = calculationString.split(separator);

    } else {
        if (params.search(",\n") !== -1) return `Error: number expected but \n found at position ${(params.search(",\n") + 2)}`;
        if (params.endsWith(",") || params.endsWith("\n")) return "Error: number expected but EOF found";
        arrayOfNumbersAsStrings = params
            .replace('\n', ',')
            .split(',');
    }

    const arrayOfNumbers = arrayOfNumbersAsStrings.map(number => parseFloat(number));
    // filter for negative numbers - if found, return error
    const negativeNumbers = arrayOfNumbers.filter(number => {
        if (number < 0) return number;
    });
    if (negativeNumbers.length) return `Error, negative numbers are not allowed: ${negativeNumbers.join(', ')}`

    const sumOfNumbers = arrayOfNumbers.reduce((a, b) => a + b);
    return sumOfNumbers;
};

export default stringCalculator;