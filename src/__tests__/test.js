import orderByProps from '../game';

const expected = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

// eslint-disable-next-line
test('Проверка вывода корректной карточки персонажа', () => {
  const personCard = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const sortItems = ['name', 'level'];
  const currentCard = orderByProps(personCard, sortItems);
  // eslint-disable-next-line
  expect(expected).toEqual(currentCard);
});
