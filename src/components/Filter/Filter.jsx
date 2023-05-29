import React from 'react'

import classes from '../FiltersList/FiltersList.module.scss'

const Filter = ({ activeFilters, filter, id, name, description }) => {
  return (
    <label htmlFor={id} className={classes.transfer}>
      <input
        onChange={filter}
        data-filter-name={name}
        id={id}
        type="checkbox"
        className={classes.checkbox}
        checked={activeFilters.some((filterName) => filterName === name)}
      />
      <p className={classes['transfer-title']}>{description}</p>
    </label>
  )
}

export default Filter
