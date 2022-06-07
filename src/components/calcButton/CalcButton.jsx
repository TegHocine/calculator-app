import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/CalcContext'

import './calcButton.scss'

const CalcButton = ({ value }) => {
  const { updateCalc, calculate, deleteLast, reset } =
    useContext(CalculatorContext)
  const bgColor =
    value === 'RESET' || value === 'DEL'
      ? 'graybg'
      : value === '='
      ? 'redbg'
      : ''
  const keytype = value === 'RESET' || '=' ? 'bigkey' : ''

  const type = () => {
    switch (value) {
      case '=':
        calculate()
        break
      case 'DEL':
        deleteLast()
        break
      case 'RESET':
        reset()
        break
      default:
        updateCalc(value)
        break
    }
  }

  return (
    <div className={`key ${bgColor} ${keytype}`} onClick={type}>
      {value}
    </div>
  )
}

export default CalcButton
