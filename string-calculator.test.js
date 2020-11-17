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
})