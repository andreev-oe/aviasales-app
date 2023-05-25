const reducer = (
  state = {
    sort: 'default',
    activeFilters: [],
  },
  action
) => {
  const filterIndex = (filterName) => state.activeFilters.findIndex((name) => name === filterName)
  switch (action.type) {
    case 'SORT_FASTEST':
      state.sort = 'SORT_FASTEST'
      return state
    case 'SORT_CHEAPEST':
      state.sort = 'SORT_CHEAPEST'
      return state
    case 'FILTER':
      // TODO add logic to select/deselect checkboxes
      if (action.checkedFilter.checked && action.checkedFilter.filterName === 'NONE') {
        state.activeFilters = ['NONE']
      } else if (action.checkedFilter.checked && action.checkedFilter.filterName === 'ALL') {
        state.activeFilters = ['ALL', 'NONE', '1', '2', '3']
      } else if (action.checkedFilter.checked && filterIndex(action.checkedFilter.filterName) < 0) {
        state.activeFilters.push(action.checkedFilter.filterName)
      } else if (!action.checkedFilter.checked) {
        const index = filterIndex(action.checkedFilter.filterName)
        state.activeFilters.splice(index, 1)
      }
      console.log('state', state)
      return state
    default:
      return state
  }
}

export default reducer
