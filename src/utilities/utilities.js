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
  const filterTransfers = (name, transfersCount) => {
    if (activeFilters.some((filterName) => filterName === name)) {
      return [
        ...tickets.filter((ticket) => {
          if (
            ticket.segments[0].stops.length === transfersCount &&
            ticket.segments[1].stops.length === transfersCount
          ) {
            return ticket
          }
        }),
      ]
    } else {
      return []
    }
  }
  const noTransfers = filterTransfers(filterOption.NONE, transfersCount.NONE)
  const oneTransfer = filterTransfers(filterOption.ONE_TRANSFER, transfersCount.ONE_TRANSFER)
  const twoTransfers = filterTransfers(filterOption.TWO_TRANSFERS, transfersCount.TWO_TRANSFERS)
  const threeTransfers = filterTransfers(filterOption.THREE_TRANSFERS, transfersCount.THREE_TRANSFERS)
  const result = [...noTransfers, ...oneTransfer, ...twoTransfers, ...threeTransfers]
  if (result.length) {
    return sortItems(activeSortTab, result)
  }
}
