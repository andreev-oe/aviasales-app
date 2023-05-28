import { nanoid } from 'nanoid'

const rootReducer = (
  state = {
    activeSortTab: 'SORT_CHEAPEST',
    activeFilters: ['ALL', 'NONE', '1', '2', '3'],
    data: {
      tickets: [],
      stop: false,
      searchId: '',
    },
  },
  action
) => {
  const newState = { ...state }
  newState.activeFilters = [...state.activeFilters]
  newState.data = { ...state.data }
  const setTicketsId = (tickets) =>
    tickets.map((ticket) => {
      ticket.id = nanoid()
      return ticket
    })
  const filterIndex = (filterName) => newState.activeFilters.findIndex((name) => name === filterName)
  switch (action.type) {
    case 'GET_SEARCH_ID':
      newState.data.searchId = action.searchId
      return newState
    case 'GET_TICKETS':
      newState.data.tickets = [...newState.data.tickets, ...setTicketsId(action.data.tickets)]
      newState.data.stop = action.data.stop
      return newState
    case 'SORT_FASTEST':
      newState.activeSortTab = 'SORT_FASTEST'
      return newState
    case 'SORT_CHEAPEST':
      newState.activeSortTab = 'SORT_CHEAPEST'
      return newState
    case 'FILTER':
      if (action.checkedFilter.checked && action.checkedFilter.filterName === 'ALL') {
        newState.activeFilters = ['ALL', 'NONE', '1', '2', '3']
      } else if (!action.checkedFilter.checked && action.checkedFilter.filterName === 'ALL') {
        newState.activeFilters = []
      } else if (action.checkedFilter.checked && filterIndex(action.checkedFilter.filterName) < 0) {
        newState.activeFilters.push(action.checkedFilter.filterName)
      } else if (!action.checkedFilter.checked) {
        const index = filterIndex(action.checkedFilter.filterName)
        newState.activeFilters.splice(index, 1)
      }
      if (
        newState.activeFilters.length === 4 &&
        action.checkedFilter.checked &&
        action.checkedFilter.filterName !== 'ALL'
      ) {
        newState.activeFilters = ['ALL', 'NONE', '1', '2', '3']
      } else if (
        !action.checkedFilter.checked &&
        newState.activeFilters.length === 4 &&
        action.checkedFilter.filterName !== 'ALL'
      ) {
        const index = filterIndex('ALL')
        newState.activeFilters.splice(index, 1)
      }
      return newState
    default:
      return newState
  }
}

export default rootReducer
