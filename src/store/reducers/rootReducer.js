import { combineReducers } from 'redux'

import sortReducer from './sortReducer.js'
import filtersReducer from './filtersReducer.js'
import ticketListReducer from './ticketsReducer.js'

const rootReducer = combineReducers({
  activeFilters: filtersReducer,
  activeSortTab: sortReducer,
  data: ticketListReducer,
})

export default rootReducer
