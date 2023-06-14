const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const message = 'The zoo is open';
  test('Verifica se quando nenhum parametro é passado retorna o esperado', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Verifica se quando o segundo parametro passado é diferente de um numero retorna um erro', () => {
    expect(() => getOpeningHours('Monday', 'nove:vinte-AM')).toThrow();
  });
  test('Verifica se quando o segundo parametro passado é igual a "PM" ou "AM" e retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '09:00-CT')).toThrow();
  });
  test('Verifica se quando o primeiro parametro passado é um dia da semana e se não for retorna erro', () => {
    expect(() => getOpeningHours('Xablau', '09:00-CT')).toThrow();
  });
  test('Verifica se quando as horas do segundo parametro passado retorna o esperado', () => {
    expect(() => getOpeningHours('Monday', '15:00-AM')).toThrow();
  });
  test('Verifica se quando as minutos do segundo parametro passado retorna o esperado', () => {
    expect(() => getOpeningHours('Monday', '11:74-AM')).toThrow();
  });
  test('Verifica se quando o segundo parametro passado é igual a "PM" ou "AM" e retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '09:00-CT')).toThrow();
  });
  test('Verifica se quando o parametro passado é Monday retorna o esperado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('Verifica se quando o parametro passado é Tuesday retorna o esperado', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(message);
  });
  test('Verifica se quando o parametro passado é Wednesday retorna o esperado', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe(message);
  });
  test('Verifica se quando o passado a hora 12 converte para 0', () => {
    expect(getOpeningHours('Wednesday', '12:00-AM')).toBe('The zoo is closed');
  });
  test('Verifica se retorna corretamente PM e AM', () => {
    expect(getOpeningHours('Wednesday', '12:00-PM')).toBe(message);
  });
});
