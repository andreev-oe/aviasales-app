import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { sortCheapest, sortFastest } from '../../actions/actions.js'

import classes from './SortTabs.module.scss'

const SortTabs = ({ activeSortTab, sortFastest, sortCheapest }) => {
  return (
    <div className={classes.tabs}>
      <button
        onClick={sortCheapest}
        type={'button'}
        className={`${classes.button} ${activeSortTab === 'SORT_CHEAPEST' ? classes['button-active'] : ''} ${
          classes['button-cheap']
        }`}
      >
        Самый дешёвый
      </button>
      <button
        onClick={sortFastest}
        type={'button'}
        className={`${classes.button} ${activeSortTab === 'SORT_FASTEST' ? classes['button-active'] : ''} ${
          classes['button-fast']
        }`}
      >
        Самый быстрый
      </button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    activeSortTab: state.activeSortTab,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sortFastest: bindActionCreators(sortFastest, dispatch),
    sortCheapest: bindActionCreators(sortCheapest, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortTabs)
