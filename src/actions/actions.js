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
export const getTickets = () => {
  return async (dispatch) => {
    try {
      const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
      const searchId = await searchIdResponse.json()
      const ticketsResponse = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId.searchId}`
      )
      const tickets = await ticketsResponse.json()
      dispatch({ type: 'GET_TICKETS', tickets: tickets })
    } catch (error) {
      // TODO handle errors
      console.log(error)
    }
  }
}
