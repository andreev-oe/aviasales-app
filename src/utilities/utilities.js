import { filterOption, actionType, transfersCount } from '../constants/constants.js'

const sortItemsDuration = (items) => {
  items.sort((a, b) => {
    if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
      return -1
    }
    if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
      return 1
    }
    return 0
  })
  return items
}
const sortItemsPrice = (items) => {
  items.sort((a, b) => {
    if (a.price < b.price) {
      return -1
    }
    if (a.price > b.price) {
      return 1
    }
    return 0
  })
  return items
}
export const sortItems = (activeSortTab, items) => {
  switch (activeSortTab) {
    case actionType.SORT_FASTEST:
      return sortItemsDuration(items)
    case actionType.SORT_CHEAPEST:
      return sortItemsPrice(items)
  }
}
export const filterItems = (tickets, activeFilters, activeSortTab) => {
  let noTransfers = []
  let oneTransfer = []
  let twoTransfers = []
  let threeTransfers = []
  if (activeFilters.some((filterName) => filterName === filterOption.NONE)) {
    noTransfers = [
      ...tickets.filter((ticket) => {
        if (
          ticket.segments[0].stops.length === transfersCount.NONE &&
          ticket.segments[1].stops.length === transfersCount.NONE
        ) {
          return ticket
        }
      }),
    ]
  }
  if (activeFilters.some((filterName) => filterName === filterOption.ONE_TRANSFER)) {
    oneTransfer = [
      ...tickets.filter((ticket) => {
        if (
          ticket.segments[0].stops.length === transfersCount.ONE_TRANSFER &&
          ticket.segments[1].stops.length === transfersCount.ONE_TRANSFER
        ) {
          return ticket
        }
      }),
    ]
  }
  if (activeFilters.some((filterName) => filterName === filterOption.TWO_TRANSFERS)) {
    twoTransfers = [
      ...tickets.filter((ticket) => {
        if (
          ticket.segments[0].stops.length === transfersCount.TWO_TRANSFERS &&
          ticket.segments[1].stops.length === transfersCount.TWO_TRANSFERS
        ) {
          return ticket
        }
      }),
    ]
  }
  if (activeFilters.some((filterName) => filterName === filterOption.THREE_TRANSFERS)) {
    threeTransfers = [
      ...tickets.filter((ticket) => {
        if (
          ticket.segments[0].stops.length === transfersCount.THREE_TRANSFERS &&
          ticket.segments[1].stops.length === transfersCount.THREE_TRANSFERS
        ) {
          return ticket
        }
      }),
    ]
  }
  const result = [...noTransfers, ...oneTransfer, ...twoTransfers, ...threeTransfers]
  if (result.length) {
    return sortItems(activeSortTab, result)
  }
}