const stringLength = require('./main');
test("get string length", () => {
  expect(stringLength('abcdef')).toBe(6);
  expect(() => stringLength('')).toThrow();
  expect(() => stringLength('jkjljljhkbj')).toThrow();
});
