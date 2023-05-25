export const sortCheapest = () => ({ type: 'SORT_CHEAPEST' })
export const sortFastest = () => ({ type: 'SORT_FASTEST' })
export const filter = (evt) => {
  return {
    type: 'FILTER',
    checkedFilter: evt.target.id,
  }
}
