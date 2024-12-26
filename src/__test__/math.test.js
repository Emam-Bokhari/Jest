const { addition, substraction, multiply } = require("../commonMatchers/math");

describe("Basic mathmetics test ", () => {
  it("should addition two numbers", () => {
    expect(addition(5, 10)).toBe(15);
  });

  it("should subtract when the first number is larger", () => {
    expect(substraction(10, 5)).toBe(5);
  });

  it("should subtract when the result is negative", () => {
    expect(substraction(5, 10)).toBe(-5);
  });

  it("should subtract when zero from a number", () => {
    expect(substraction(5, 0)).toBe(5);
  });

  it("should subtract zero from two numbers", () => {
    expect(substraction(0, 0)).toBe(0);
  });

  it("should subtract two equal numbers", () => {
    expect(substraction(5, 5)).toBe(0);
  });

  it("should subtract two negative numbers", () => {
    expect(substraction(-10, -4)).toBe(-6);
  });

  it("should multply when two positive numbers", () => {
    expect(multiply(5, 10)).toBe(50);
  });

  it("should multiply when a number is negative", () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  it("should multiply when two negative numbers", () => {
    expect(multiply(-5, -5)).toBe(25);
  });

  it("should multiply when two numbers is zero", () => {
    expect(multiply(0, 0)).toBe(0);
  });
});
