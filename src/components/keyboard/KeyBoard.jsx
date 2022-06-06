import React from 'react'
import CalcButton from '../calcButton/CalcButton'

import './keyboard.scss'
const KeyBoard = ({ keys }) => {
  return (
    <div className='keyboard'>
      {/* A nested map to show keyboard  for calc where @keys is the array of array  */}
      {keys &&
        keys.map((key, i) => (
          <div key={i} className='row'>
            {key.map((k, i) => (
              <CalcButton key={i} value={k} />
            ))}
          </div>
        ))}
    </div>
  )
}

export default KeyBoard
