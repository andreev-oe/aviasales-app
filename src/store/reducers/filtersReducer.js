import { actionType, filterOption, ALL_FILTERS_SELECTED_NUMBER, spliceParams } from '../../constants/constants.js'
const filtersReducer = (
  state = [
    filterOption.ALL,
    filterOption.NONE,
    filterOption.ONE_TRANSFER,
    filterOption.TWO_TRANSFERS,
    filterOption.THREE_TRANSFERS,
  ],
  action
) => {
  let activeFilters = [...state]
  const filterIndex = (filterName) => activeFilters.findIndex((name) => name === filterName)
  switch (action.type) {
    case actionType.FILTER:
      if (action.checkedFilter.checked && action.checkedFilter.filterName === filterOption.ALL) {
        activeFilters = [
          filterOption.ALL,
          filterOption.NONE,
          filterOption.ONE_TRANSFER,
          filterOption.TWO_TRANSFERS,
          filterOption.THREE_TRANSFERS,
        ]
      } else if (!action.checkedFilter.checked && action.checkedFilter.filterName === filterOption.ALL) {
        activeFilters = []
      } else if (action.checkedFilter.checked && filterIndex(action.checkedFilter.filterName) < 0) {
        activeFilters.push(action.checkedFilter.filterName)
      } else if (!action.checkedFilter.checked) {
        const index = filterIndex(action.checkedFilter.filterName)
        activeFilters.splice(index, spliceParams.DELETE_ONE)
      }
      if (
        activeFilters.length === ALL_FILTERS_SELECTED_NUMBER &&
        action.checkedFilter.checked &&
        action.checkedFilter.filterName !== filterOption.ALL
      ) {
        activeFilters = [
          filterOption.ALL,
          filterOption.NONE,
          filterOption.ONE_TRANSFER,
          filterOption.TWO_TRANSFERS,
          filterOption.THREE_TRANSFERS,
        ]
      } else if (
        !action.checkedFilter.checked &&
        activeFilters.length === ALL_FILTERS_SELECTED_NUMBER &&
        action.checkedFilter.filterName !== filterOption.ALL
      ) {
        const index = filterIndex(filterOption.ALL)
        activeFilters.splice(index, spliceParams.DELETE_ONE)
      }
      return activeFilters
    default:
      return activeFilters
  }
}

export default filtersReducer
