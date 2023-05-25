import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { filter } from '../../actions/actions.js'

import classes from './TransferFilters.module.scss'

const TransferFilters = ({ filter }) => {
  // TODO add logic to select/deselect checkboxes
  return (
    <section className={classes.transfers}>
      <h2 className={classes['transfers-title']}>Количество пересадок</h2>
      <div className={classes.variants}>
        <label htmlFor="1" className={classes.transfer}>
          <input onClick={filter} data-filter-name={'ALL'} id="1" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>Все</p>
        </label>
        <label htmlFor="2" className={classes.transfer}>
          <input onClick={filter} data-filter-name={'NONE'} id="2" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>Без пересадок</p>
        </label>
        <label htmlFor="3" className={classes.transfer}>
          <input onClick={filter} data-filter-name={'1'} id="3" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>1 пересадка</p>
        </label>
        <label htmlFor="4" className={classes.transfer}>
          <input onClick={filter} data-filter-name={'2'} id="4" type="checkbox" className={classes.checkbox} />
          <p className={classes['transfer-title']}>2 пересадки</p>
        </label>
        <label htmlFor="5" className={classes.transfer}>
          <input onClick={filter} data-filter-name={'3'} id="5" type="checkbox" className={classes.checkbox} />
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
