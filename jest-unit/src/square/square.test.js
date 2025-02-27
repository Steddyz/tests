const square = require("./square");

describe("square", () => {
  // перед каждым
  beforeEach(() => {
    jest.clearAllMocks();
    //например добавлять в БД
  });

  // Один раз беред всеми тестами
  beforeAll(() => {});

  test("Корректно", () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("Корректное значение", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {});
});
