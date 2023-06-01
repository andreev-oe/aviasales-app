import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { filter } from '../../store/actions/actions.js'
import Filter from '../Filter/index.js'
import { filters } from '../../constants/constants.js'

import classes from './FiltersList.module.scss'

const FiltersList = ({ filter, activeFilters }) => {
  return (
    <section className={classes.filters}>
      <h2 className={classes['filters__title']}>Количество пересадок</h2>
      <div className={classes['filters__list']}>
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
const filterListActionCreators = {
  filter,
}
const mapDispatchToProps = (dispatch) => bindActionCreators(filterListActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList)
