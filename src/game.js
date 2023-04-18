export default function showFightingCard({ special }) {
  return special.map(({ description = 'Описание недоступно', ...s }) => ({ ...s, description }))
}