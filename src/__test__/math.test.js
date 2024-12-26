const { addition } = require("../commonMatchers/math");

describe("Basic mathmetics test ", () => {
  it("should addition two numbers", () => {
    expect(addition(5, 10)).toBe(15);
  });
});
