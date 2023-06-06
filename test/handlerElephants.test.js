const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Verifica se quando nenhum parametro é passado retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Verifica se quando o parametro passado for diferente de string retorna uma mensagem', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Verifica se quando o parametro passado for diferente de "count", "names", "averageAge", "location", "popularity", "availability", retorna null', () => {
    expect(handlerElephants('diferente')).toBeNull();
  });
  test('Verifica se "count" retorna a quantidade desejada', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Verifica se "names" retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Verifica se "averageAge" retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('Verifica se "location" retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Verifica se "popularity" retorna a retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Verifica se "availability" retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
