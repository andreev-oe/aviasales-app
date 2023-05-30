import { actionType, baseUrl, STATUS_500 } from '../../constants/constants.js'

export const sortCheapest = () => ({ type: actionType.SORT_CHEAPEST })
export const sortFastest = () => ({ type: actionType.SORT_FASTEST })
export const filter = (evt) => {
  return {
    type: actionType.FILTER,
    checkedFilter: {
      checked: evt.target.checked,
      filterName: evt.target.dataset.filterName,
    },
  }
}
export const getSearchId = () => {
  return async (dispatch) => {
    try {
      const searchIdResponse = await fetch(`${baseUrl}/search`)
      const searchId = await searchIdResponse.json()
      dispatch({
        type: actionType.GET_SEARCH_ID,
        searchId: searchId,
      })
    } catch (error) {
      dispatch({
        type: actionType.ERROR,
        data: {
          error: true,
          stop: true,
        },
      })
    }
  }
}
export const getTickets = (searchId) => {
  let ticketsResponse
  return async (dispatch) => {
    try {
      ticketsResponse = await fetch(`${baseUrl}/tickets?searchId=${searchId.searchId}`)
      const data = await ticketsResponse.json()
      dispatch({
        type: actionType.GET_TICKETS,
        data: {
          tickets: data.tickets,
          stop: data.stop,
        },
      })
    } catch (error) {
      if (ticketsResponse?.status === STATUS_500) {
        dispatch({
          type: actionType.GET_TICKETS,
          data: {
            tickets: [],
          },
        })
        getTickets(searchId)
      } else {
        dispatch({
          type: actionType.ERROR,
          data: {
            tickets: [],
            stop: true,
            error: true,
          },
        })
      }
    }
  }
}
