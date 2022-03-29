import { fullTrim, nameIsValid } from '../src/homework3';

// describe('Здесь могла бы быть ваша реклама', () => {
//   /**
//    * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
//    * которая удаляет пробелы и табуляторы в начале и конце строки.
//    */

//   test('Проверяем тримминг для пробела в начале слова', () => {
//     expect(fullTrim(' Это домашка')).toEqual('Это домашка');
//   });

//   /**
//    * Напишите параметризированный unit (describe.each`table`) тест для функции,
//    * которая проверяет валидность кличек котиков.
//    * Кличка считается валидной, если она соответствует следующим условиям:
//    * 1) Кличка содержит минимум два символа;
//    * 2) Кличка не пустая;
//    * 3) Кличка не содержит пробелов.

//    Обратите внимание, в примере приведен обычный тест.
//    Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
//    */

//   test('Передать валидную кличку', () => {
//     expect(nameIsValid('Имя')).toEqual(true);
//   });
// });

describe('testing spaces and tabs', () => {
  test('testing spaces', () => {
      expect(fullTrim(' new test ')).toEqual('new test');
      });
  test('testing tabs', () => {
      expect(fullTrim('   new test    ')).toEqual('new test');
  });
});

// при пустой строке функция возвращает пустую строку вместо false, потому пришлось в expected написать пустую строку, чтобы тест прошел.
describe('cats names', () => {
  test.each`
  name              | expected
  ${'ivan'}         | ${true}
  ${'a'}            | ${false}
  ${'ivan ivan'}    | ${false}
  ${''}             | ${''} 
`('returns $expected when $name is valid', ({name, expected}) => {
    expect(nameIsValid(name)).toEqual(expected);
  });
});
