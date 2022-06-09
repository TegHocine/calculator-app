import React from 'react'

import Toggle from '../togglebar/Toggle'

import './themebar.scss'

const ThemeBar = () => {
  return (
    <div className='themebar'>
      <h1>calc</h1>
      <div className='themetoggle'>
        THEME <Toggle />
      </div>
    </div>
  )
}

export default ThemeBar
