import stringCalculator from "./string-calculator";

describe("string calculator", () => {
    it("receives and empty string, returns 0", () => {
        expect(stringCalculator.add("")).toBe(0);
    });
    it("receives a string of one number, returns the number", () => {
        expect(stringCalculator.add("1")).toBe(1);
    });
    it("receives 2 numbers separated by comma, returns the sum", () => {
        expect(stringCalculator.add("1,2")).toBe(3);
    });
    it("receives 2 numbers separated by new line, returns the sum", () => {
        expect(stringCalculator.add("1\n2")).toBe(3);
    });
    it("receives 3 numbers separated any way, returns the sum", () => {
        expect(stringCalculator.add("1,2\n3")).toBe(6);
    });
    it("receives a negative number, throws an exception", () => {
        expect(stringCalculator.add("-1,2,-3")).toBe("negatives are not allowed: -1,-3");
    });
})