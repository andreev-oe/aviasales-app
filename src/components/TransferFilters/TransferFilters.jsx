import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { filter } from '../../actions/actions.js'

import classes from './TransferFilters.module.scss'

const TransferFilters = ({ filter }) => {
  return (
    <section className={classes.transfers}>
      <h2 className={classes['transfers-title']}>Количество пересадок</h2>
      <div className={classes.variants}>
        <label htmlFor="1" className={classes.transfer}>
          <input onClick={filter} id="1" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>Все</p>
        </label>
        <label htmlFor="2" className={classes.transfer}>
          <input onClick={filter} id="2" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>Без пересадок</p>
        </label>
        <label htmlFor="3" className={classes.transfer}>
          <input onClick={filter} id="3" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>1 пересадка</p>
        </label>
        <label htmlFor="4" className={classes.transfer}>
          <input onClick={filter} id="4" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>2 пересадки</p>
        </label>
        <label htmlFor="5" className={classes.transfer}>
          <input onClick={filter} id="5" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>3 пересадки</p>
        </label>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}
const mapDispatchToProps = (dispatch) => {
  const checkedFilter = bindActionCreators(filter, dispatch)
  return {
    filter: checkedFilter,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransferFilters)
