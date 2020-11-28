const stringCalculator = params => {
    if (!params) return 0;
    if (typeof (params) !== "string") return "Error: not a string input";

    let separator;
    let arrayOfNumbersAsStrings;

    if (params.startsWith("//")) {
        separator = params.slice(2, (params.indexOf("\n")));
        let calculationString = params.slice((params.indexOf("\n") + 1));
        let regexp = RegExp(`[^${separator}^0-9]`);
        if (params.endsWith(separator)) return "Error: number expected but EOF found";
        if (calculationString.match(regexp)) {
            const wrongCharacter = calculationString.match(regexp);
            if (wrongCharacter) return `Error: '${separator}' expected but '${wrongCharacter}' found at position ${params.indexOf(wrongCharacter) + 1}.`;
        }
        arrayOfNumbersAsStrings = params
            .slice((params.indexOf("\n") + 1))
            .split(separator);

    } else {
        if (params.search(",\n") !== -1) return `Error: number expected but \n found at position ${(params.search(",\n") + 2)}`;
        if (params.endsWith(",") || params.endsWith("\n")) return "Error: number expected but EOF found";
        arrayOfNumbersAsStrings = params
            .replace('\n', ',')
            .split(',');
    }

    const sumOfNumbers = arrayOfNumbersAsStrings
        .map(number => parseFloat(number))
        .reduce((a, b) => a + b);
    return sumOfNumbers;
};

export default stringCalculator;