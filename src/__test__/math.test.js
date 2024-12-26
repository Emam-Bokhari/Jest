const {
  addition,
  substraction,
  multiply,
  division,
  percentage,
} = require("../commonMatchers/math");

describe("Basic mathmetics test ", () => {
  // test cases for addition
  it("should addition two numbers", () => {
    expect(addition(5, 10)).toBe(15);
  });

  //   test cases for substraction
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

  //   test cases for multply
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

  //   test cases for division
  test("should division when first number is larger", () => {
    expect(division(10, 2)).toBe(5);
  });

  test("should division when first number is less than second number", () => {
    expect(division(6, 12)).toBe(0.5);
  });

  test("should division when two numbers is negative", () => {
    expect(division(-2, -2)).toBe(1);
  });

  test("should division when two numbers is zero", () => {
    expect(division(0, 0)).toBeNaN();
  });

  //   percentage
  test("should percentage", () => {
    expect(percentage(60, 80)).toBe(48);
  });

  test("should percentage when value is negative", () => {
    expect(percentage(-60, 80)).toBe(-48);
  });

  test("should percentage when value is zero", () => {
    expect(percentage(0, 20)).toBe(0);
  });

  test("should percentage when percentage is negative number", () => {
    expect(percentage(60, -80)).toBe(-48);
  });

  test("should percentage when value and percentage is negative", () => {
    expect(percentage(-60, -80)).toBe(48);
  });
});
