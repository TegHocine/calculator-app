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

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  // this function calculate the value typed with eval function ex: for 9 + 3  the function set calc to 11

  const calculate = () => {
    setCalc(eval(calc).toString())
    setResult('')
  }

  const deleteLast = () => {
    if (calc === '') return

    setResult('')

    const value = calc.slice(0, -1)
    setCalc(value)
  }

  const reset = () => {
    if (calc === '') return

    setCalc('')
    setResult('')
  }

  return (
    <CalculatorContext.Provider
      value={{ calc, result, updateCalc, calculate, deleteLast, reset }}>
      {props.children}
    </CalculatorContext.Provider>
  )
}

export default CalcContext
