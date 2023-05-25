import React from 'react'
import { connect } from 'react-redux'

import { sortFastest, sortCheapest } from '../../actions/actions.js'

import classes from './SortTabs.module.scss'

const SortTabs = ({ sortFastest, sortCheapest }) => {
  return (
    <div className={classes.tabs}>
      <button
        onClick={sortCheapest}
        type={'button'}
        className={`${classes.button} ${classes['button-active']} ${classes['button-cheap']}`}
      >
        Самый дешёвый
      </button>
      <button onClick={sortFastest} type={'button'} className={`${classes.button} ${classes['button-fast']}`}>
        Самый быстрый
      </button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  }
}

export default connect(mapStateToProps, { sortFastest, sortCheapest })(SortTabs)
