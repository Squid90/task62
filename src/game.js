export default function showFightingCard(character) {
  const fightingCard = [];

  for (let i = 0; i < character.special.length; i += 1) {
    const {
      special: { [i]: { id } },
      special: { [i]: { name } },
      special: { [i]: { description = 'Описание недоступно' } },
      special: { [i]: { icon } },
    } = character;
    fightingCard.push({
      id, name, description, icon,
    });
  }
  return fightingCard;
}
