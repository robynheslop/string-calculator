
const stringCalculator = params => {
    if (!params) return 0;
    if (typeof(params) !== "string") return "Error: not a string input";
    return parseInt(params);
};

export default stringCalculator;