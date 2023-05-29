export const actionType = {
  SORT_CHEAPEST: 'SORT_CHEAPEST',
  SORT_FASTEST: 'SORT_FASTEST',
  FILTER: 'FILTER',
  GET_SEARCH_ID: 'GET_SEARCH_ID',
  GET_TICKETS: 'GET_TICKETS',
}
export const filterOption = {
  ALL: 'ALL',
  NONE: 'NONE',
  ONE_TRANSFER: '1',
  TWO_TRANSFERS: '2',
  THREE_TRANSFERS: '3',
}
export const filters = [
  {
    id: 1,
    name: 'ALL',
    description: 'Все',
  },
  {
    id: 2,
    name: 'NONE',
    description: 'Без пересадок',
  },
  {
    id: 3,
    name: '1',
    description: '1 пересадка',
  },
  {
    id: 4,
    name: '2',
    description: '2 пересадки',
  },
  {
    id: 5,
    name: '3',
    description: '3 пересадки',
  },
]
export const spliceParams = {
  SPLICE_START_INDEX: 3,
  DELETE_ZERO: 0,
  DELETE_ONE: 1,
  INSERT_VALUE: ' ',
}
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const MIN_STOPS_LENGTH = 1
export const MIN_LEFT_PAD_NUMBER = 10
export const TIME_FORMAT = 'kk:mm'
export const NO_STOPS_TEXT = 'Нет'
export const defaultChunkLength = 5
export const ALL_FILTERS_SELECTED_NUMBER = 4
