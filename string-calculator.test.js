import stringCalculator from "./string-calculator";

describe("string calculator", () => {
    it("receives and empty string, returns 0", () => {
        expect(stringCalculator.add("")).toBe(0);
    })
})