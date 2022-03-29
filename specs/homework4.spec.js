import { kolobok, newYear } from '../src/homework4';

describe('kolobok', () => {
  test('test character dedushka', () => {
      expect(kolobok('дедушка')).toEqual('я от дедушки ушел');
  });
  test('test character babushka', () => {
      expect(kolobok('бабушка')).toEqual('я от бабушки ушел');
  });
  test('test other character', () => {
      expect(kolobok('лиса')).toEqual('и от тебя уйду');
  });
});

describe('newYear', () => {
  test('Снегурочка', () => {
    expect(newYear('Снегурочка')).toEqual('Снегурочка! Снегурочка! Снегурочка!');
  });
  test('Дед Мороз', () => {
    expect(newYear('Дед Мороз')).toEqual('Дед Мороз! Дед Мороз! Дед Мороз!');
  });
}); 