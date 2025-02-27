const validateValue = require("./validateValue");

test("Валидация значения", () => {
  expect(validateValue(50)).toBe(true);
});

describe("validateValue", () => {
  test("Корректное значения", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Меньше корректного", () => {
    expect(validateValue(-52)).toBe(false);
  });
  test("Больше корректного", () => {
    expect(validateValue(150)).toBe(false);
  });
  test("Пограничное значение мин", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Пограничное значение макс", () => {
    expect(validateValue(100)).toBe(true);
  });
});
