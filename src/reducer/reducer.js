const reducer = (
  state = {
    activeSortTab: 'default',
    activeFilters: ['default'],
  },
  action
) => {
  const newState = { ...state }
  newState.activeFilters = [...state.activeFilters]
  const filterIndex = (filterName) => newState.activeFilters.findIndex((name) => name === filterName)
  switch (action.type) {
    case 'SORT_FASTEST':
      newState.activeSortTab = 'SORT_FASTEST'
      return newState
    case 'SORT_CHEAPEST':
      newState.activeSortTab = 'SORT_CHEAPEST'
      return newState
    case 'FILTER':
      if (action.checkedFilter.checked && action.checkedFilter.filterName === 'NONE') {
        newState.activeFilters = ['NONE']
        return newState
      } else if (action.checkedFilter.checked && action.checkedFilter.filterName === 'ALL') {
        newState.activeFilters = ['ALL', 'NONE', '1', '2', '3']
        return newState
      } else if (action.checkedFilter.checked && filterIndex(action.checkedFilter.filterName) < 0) {
        newState.activeFilters.push(action.checkedFilter.filterName)
        return newState
      } else if (!action.checkedFilter.checked) {
        const index = filterIndex(action.checkedFilter.filterName)
        newState.activeFilters.splice(index, 1)
        return newState
      }
      break
    default:
      return newState
  }
}

export default reducer
