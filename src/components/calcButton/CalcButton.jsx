import React from 'react'
import './calcButton.scss'

const CalcButton = ({ value }) => {
  const bgColor =
    value === 'RESET' || value === 'DEL'
      ? 'graybg'
      : value === '='
      ? 'redbg'
      : ''

  const type = value === 'RESET' || '=' ? 'bigkey' : ''
  return <div className={`key ${bgColor} ${type}`}>{value}</div>
}

export default CalcButton
