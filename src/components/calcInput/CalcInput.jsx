import React, { useContext } from 'react'
import { CalculatorContext } from '../../context/CalcContext'

import './calcInput.scss'

const CalcInput = () => {
  const { calc, result } = useContext(CalculatorContext)
  console.log({ calc, result })
  return (
    <div className='calc-input'>
      {result ? <span className='pre-result'>({result})</span> : ''}
      &nbsp;
      {calc || 0}
    </div>
  )
}

export default CalcInput
