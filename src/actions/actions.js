export const sortCheapest = () => ({ type: 'SORT_CHEAPEST' })
export const sortFastest = () => ({ type: 'SORT_FASTEST' })
export const filter = (evt) => {
  return {
    type: 'FILTER',
    checkedFilter: {
      checked: evt.target.checked,
      filterName: evt.target.dataset.filterName,
    },
  }
}
