import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/CalcContext'

import './calcButton.scss'

const CalcButton = ({ value }) => {
  const { updateCalc } = useContext(CalculatorContext)
  const bgColor =
    value === 'RESET' || value === 'DEL'
      ? 'graybg'
      : value === '='
      ? 'redbg'
      : ''
  const keytype = value === 'RESET' || '=' ? 'bigkey' : ''

  const type = () => {
    updateCalc(value)
  }
  return (
    <div className={`key ${bgColor} ${keytype}`} onClick={type}>
      {value}
    </div>
  )
}

export default CalcButton
