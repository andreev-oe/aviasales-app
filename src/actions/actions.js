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
export const getSearchId = () => {
  return async (dispatch) => {
    try {
      const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
      const searchId = await searchIdResponse.json()
      dispatch({ type: 'GET_SEARCH_ID', searchId: searchId })
    } catch (error) {
      // TODO handle errors
      console.log(error)
    }
  }
}
export const getTickets = (searchId) => {
  let ticketsResponse
  return async (dispatch) => {
    try {
      ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId.searchId}`)
      const data = await ticketsResponse.json()
      dispatch({ type: 'GET_TICKETS', data: { tickets: data.tickets, stop: data.stop } })
    } catch (error) {
      // TODO handle errors
      if (ticketsResponse.status === 500) {
        getTickets(searchId)
      }
      dispatch({ type: 'GET_TICKETS', data: { tickets: [] } })
    }
  }
}
