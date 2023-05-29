import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { filter } from '../../actions/actions.js'
import Filter from '../Filter/index.js'
import { filters } from '../../constants.js'

import classes from './FiltersList.module.scss'

const FiltersList = ({ filter, activeFilters }) => {
  return (
    <section className={classes.transfers}>
      <h2 className={classes['transfers-title']}>Количество пересадок</h2>
      <div className={classes.variants}>
        {filters.map((filterItem) => {
          return (
            <Filter
              key={filterItem.id}
              activeFilters={activeFilters}
              filter={filter}
              id={filterItem.id}
              name={filterItem.name}
              description={filterItem.description}
            />
          )
        })}
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    activeFilters: state.activeFilters,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    filter: bindActionCreators(filter, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList)
