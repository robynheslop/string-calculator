import stringCalculator from "./string-calculator";

describe("string-calculator", () => {
    it("receives an empty string, returns 0", () => {
        expect(stringCalculator("")).toBe(0);
    });
    it("receives '1', returns 1", () => {
        expect(stringCalculator("1")).toBe(1);
    });
    it("receives input that is not a string, throws error", () =>{
        expect(stringCalculator(1)).toBe("Error: not a string input");
    });
    it("receives string of 2 numbers, returns sum of numbers", () =>{
        expect(stringCalculator("1,2")).toBe(3);
    });
    it("receives string of 3 numbers, returns sum of numbers", () =>{
        expect(stringCalculator("1,2,3")).toBe(6);
    });
    it("receives numbers with decimal places, returns sum", () => {
        expect(stringCalculator("1.4,2.2")).toBe(3.6);
    });
    it("receives numbers separated by '\n' or ',' and returns sum", () => {
        expect(stringCalculator("1,4\n3,7")).toBe(15);
    });
});