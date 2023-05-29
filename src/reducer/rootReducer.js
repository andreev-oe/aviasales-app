import { nanoid } from 'nanoid'

import { actionType, filterOption, ALL_FILTERS_SELECTED_NUMBER, spliceParams } from '../constants/constants.js'
//TODO split reducers and use combineReducers to join them
const rootReducer = (
  state = {
    activeSortTab: actionType.SORT_CHEAPEST,
    activeFilters: [
      filterOption.ALL,
      filterOption.NONE,
      filterOption.ONE_TRANSFER,
      filterOption.TWO_TRANSFERS,
      filterOption.THREE_TRANSFERS,
    ],
    data: {
      tickets: [],
      stop: false,
      error: false,
      searchId: '',
    },
  },
  action
) => {
  const newState = { ...state }
  newState.activeFilters = [...state.activeFilters]
  newState.data = { ...state.data }
  const setTicketId = (tickets) =>
    tickets.map((ticket) => {
      ticket.id = nanoid()
      return ticket
    })
  const filterIndex = (filterName) => newState.activeFilters.findIndex((name) => name === filterName)
  switch (action.type) {
    case actionType.ERROR:
      newState.data.error = action.data.error
      newState.data.stop = action.data.stop
      return newState
    case actionType.GET_SEARCH_ID:
      newState.data.searchId = action.searchId
      return newState
    case actionType.GET_TICKETS:
      newState.data.tickets = [...newState.data.tickets, ...setTicketId(action.data.tickets)]
      newState.data.stop = action.data.stop
      return newState
    case actionType.SORT_FASTEST:
      newState.activeSortTab = actionType.SORT_FASTEST
      return newState
    case actionType.SORT_CHEAPEST:
      newState.activeSortTab = actionType.SORT_CHEAPEST
      return newState
    case actionType.FILTER:
      if (action.checkedFilter.checked && action.checkedFilter.filterName === filterOption.ALL) {
        newState.activeFilters = [
          filterOption.ALL,
          filterOption.NONE,
          filterOption.ONE_TRANSFER,
          filterOption.TWO_TRANSFERS,
          filterOption.THREE_TRANSFERS,
        ]
      } else if (!action.checkedFilter.checked && action.checkedFilter.filterName === filterOption.ALL) {
        newState.activeFilters = []
      } else if (action.checkedFilter.checked && filterIndex(action.checkedFilter.filterName) < 0) {
        newState.activeFilters.push(action.checkedFilter.filterName)
      } else if (!action.checkedFilter.checked) {
        const index = filterIndex(action.checkedFilter.filterName)
        newState.activeFilters.splice(index, spliceParams.DELETE_ONE)
      }
      if (
        newState.activeFilters.length === ALL_FILTERS_SELECTED_NUMBER &&
        action.checkedFilter.checked &&
        action.checkedFilter.filterName !== filterOption.ALL
      ) {
        newState.activeFilters = [
          filterOption.ALL,
          filterOption.NONE,
          filterOption.ONE_TRANSFER,
          filterOption.TWO_TRANSFERS,
          filterOption.THREE_TRANSFERS,
        ]
      } else if (
        !action.checkedFilter.checked &&
        newState.activeFilters.length === ALL_FILTERS_SELECTED_NUMBER &&
        action.checkedFilter.filterName !== filterOption.ALL
      ) {
        const index = filterIndex(filterOption.ALL)
        newState.activeFilters.splice(index, spliceParams.DELETE_ONE)
      }
      return newState
    default:
      return newState
  }
}

export default rootReducer
