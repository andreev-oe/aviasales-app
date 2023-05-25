const reducer = (
  state = {
    sort: 'default',
    filter: 'default',
  },
  action
) => {
  switch (action.type) {
    case 'SORT_FASTEST':
      state.sort = 'SORT_FASTEST'
      console.log('state', state)
      return state
    case 'SORT_CHEAPEST':
      state.sort = 'SORT_CHEAPEST'
      console.log('state', state)
      return state
    case 'FILTER':
      // TODO add storing multiple checkboxes
      state.filter = action.checkedFilter
      console.log('state', state)
      return state
    default:
      console.log('state', state)
      return state
  }
}

export default reducer
