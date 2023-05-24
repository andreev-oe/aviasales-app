import React from 'react'

import classes from './SortTabs.module.scss'

const SortTabs = () => {
  return (
    <div className={classes.tabs}>
      <button type={'button'} className={`${classes.button} ${classes['button-active']} ${classes['button-cheap']}`}>
        Самый дешёвый
      </button>
      <button type={'button'} className={`${classes.button} ${classes['button-fast']}`}>
        Самый быстрый
      </button>
    </div>
  )
}

export default SortTabs
