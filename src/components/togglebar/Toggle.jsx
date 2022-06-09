import React, { useState, useEffect } from 'react'

import './toggle.scss'

const Toggle = () => {
  const [theme, setTheme] = useState(localStorage.theme)

  useEffect(() => {
    const html = document.documentElement.classList
    const prevTheme = theme === 'dark' ? 'light' : 'dark'
    const prevTheme2 = theme === 'dark' ? 'neon' : 'dark'
    const prevTheme3 = theme === 'light' ? 'neon' : 'light'
    html.remove(prevTheme)
    html.remove(prevTheme2)
    html.remove(prevTheme3)
    html.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const themePos = {
    dark: 'flex-start',
    neon: 'center',
    light: 'flex-end'
  }
  const style = { justifyContent: `${themePos[theme]}` }
  const onToggle = () => {
    switch (theme) {
      case 'dark':
        setTheme('neon')
        break
      case 'neon':
        setTheme('light')
        break
      case 'light':
      default:
        setTheme('dark')
        break
    }
  }

  return (
    <div className='toggle'>
      <div className='nbrtheme'>
        <span>1</span> <span>2</span> <span>3</span>
      </div>
      <div className='bartheme' style={style} onClick={onToggle}>
        <span className='circletheme'></span>
      </div>
    </div>
  )
}

export default Toggle
