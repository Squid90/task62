import orderByProps from '../game';

const expected = [
  {
    id: 8,
    name: 'Двойной выстрел',
    description: 'Двойной выстрел наносит двойной урон',
    icon: 'http://...',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    description: 'Описание недоступно',
    icon: 'http://...',
  },
];

// eslint-disable-next-line
test('Проверка вывода способностей в бою', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const currentSpecial = orderByProps(character);
  // eslint-disable-next-line
  expect(expected).toEqual(currentSpecial);
});
