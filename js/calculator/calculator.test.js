const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//divide() caso 1. Debe ser.
test('divide 25 / 5 to equal 5', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

//divide() caso 2. division por cero.
test('Cannot divide by zero example> 25 / 0', () => {
  expect(calculator.divide(25, 0)).toBe('Cannot divide by zero');
});

//multiply() caso 1. Debe ser.
test('multiply 18 * 2 to equal 36', () => {
  expect(calculator.multiply(18, 2)).toBe(36)
})

//multiply() caso 2. No debe ser positivo y tomar el decimal.
test('multiply -18.4 * 2 not to equal 36', () => {
  expect(calculator.multiply(-18.4, 2)).not.toBe(36)
})