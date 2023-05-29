import { nanoid } from 'nanoid'

import { actionType } from '../../constants/constants.js'
const ticketsReducer = (
  state = {
    tickets: [],
    stop: false,
    error: false,
    searchId: '',
  },
  action
) => {
  let data = { ...state }
  const setTicketId = (tickets) =>
    tickets.map((ticket) => {
      ticket.id = nanoid()
      return ticket
    })
  switch (action.type) {
    case actionType.ERROR:
      data.error = action.data.error
      data.stop = action.data.stop
      return data
    case actionType.GET_SEARCH_ID:
      data.searchId = action.searchId
      return data
    case actionType.GET_TICKETS:
      data.tickets = [...data.tickets, ...setTicketId(action.data.tickets)]
      data.stop = action.data.stop
      return data
    default:
      return data
  }
}

export default ticketsReducer
