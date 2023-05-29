import { actionType } from '../../constants/constants.js'
const sortReducer = (state = actionType.SORT_CHEAPEST, action) => {
  let activeSortTab = state
  switch (action.type) {
    case actionType.SORT_FASTEST:
      activeSortTab = actionType.SORT_FASTEST
      return activeSortTab
    case actionType.SORT_CHEAPEST:
      activeSortTab = actionType.SORT_CHEAPEST
      return activeSortTab
    default:
      return activeSortTab
  }
}

export default sortReducer
