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
    it("receives 2 separators together, returns error", () => {
        expect(stringCalculator("1,4,\n3,7")).toBe("Error: number expected but \n found at position 5");
    });
    it("receives string that ends in separator, returns error", () => {
        expect(stringCalculator("2,5,")).toBe("Error: number expected but EOF found");
    });
    it("receives string that ends in separator, returns error", () => {
        expect(stringCalculator("2,5\n")).toBe("Error: number expected but EOF found");
    });
    it("defines a new separator by //separator\n", () => {
        expect(stringCalculator("//*\n2*5*8")).toBe(15);
    });
    it("defines a new, 2 character separator", () => {
        expect(stringCalculator("//pp\n2pp1pp8")).toBe(11);
    });
    it("when new separator defined, using other separators throws error", () => {
        expect(stringCalculator("//$$\n2$$5,8")).toBe("Error: '$$' expected but ',' found at position 10.");
    });
});