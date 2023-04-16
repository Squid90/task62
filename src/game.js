export default function orderByProps(obj, sortItems) {
  const personCard = [];
  for (const key in obj) {
    if (key !== sortItems[0] && key !== sortItems[1]) {
      personCard.push({ key, value: obj[key] });
    }
  }

  personCard.sort((a, b) => (a.key > b.key ? 1 : -1));

  for (const key in obj) {
    if (key === sortItems[1]) {
      personCard.unshift({ key, value: obj[key] });
    }
  }

  for (const key in obj) {
    if (key === sortItems[0]) {
      personCard.unshift({ key, value: obj[key] });
    }
  }

  return personCard;
}
