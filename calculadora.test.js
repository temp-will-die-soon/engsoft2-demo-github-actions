const somar = require('./calculadora');

test('deve somar 2 + 2 e retornar 4', () => {
  expect(somar(2, 2)).toBe(4);
});