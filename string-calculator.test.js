import stringCalculator from "./string-calculator";

describe("string-calculator", () => {
    it("receives an empty string, returns 0", () => {
        expect(stringCalculator("")).toBe(0);
    });
    it("receives '1', returns 1", () => {
        expect(stringCalculator("1")).toBe(1);
    });
});