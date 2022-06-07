import React, { createContext, useState } from 'react'

export const CalculatorContext = createContext()

const CalcContext = (props) => {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const ops = ['/', '*', '+', '-', '.']
  // this function update the calc based on the clicked button
  // it take the value of the digit as an argument and change the calc state
  // for exemple if you click on 1 this function concatenate the old value of calc with the value of the clicked /// digit
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
      return
    setCalc(calc + value)
    setResult(calc)
  }
  return (
    <CalculatorContext.Provider value={{ calc, result, updateCalc }}>
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalcContext
