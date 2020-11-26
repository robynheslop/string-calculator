import stringCalculator from "./string-calculator";

describe("string-calculator", () => {
    it("receives an string, returns 0", () => {
        expect(stringCalculator("")).toBe(0);
    });
});