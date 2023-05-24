import React from 'react'

import classes from '../Filters/Filters.module.scss'

const Filters = () => {
  return (
    <div className={classes.filters}>
      <button type={'button'} className={`${classes.button} ${classes['button-active']} ${classes['button-cheap']}`}>
        Самый дешёвый
      </button>
      <button type={'button'} className={`${classes.button} ${classes['button-fast']}`}>
        Самый быстрый
      </button>
    </div>
  )
}

export default Filters
