import CalcInput from './components/calcInput/CalcInput'
import KeyBoard from './components/keyboard/KeyBoard'

import './app.scss'

const keys = [
  ['7', '8', '9', 'DEL'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '-'],
  ['.', '0', '/', 'x'],
  ['RESET', '=']
]

function App() {
  return (
    <div className='app'>
      <div className='calculator'>
        <CalcInput />
        <KeyBoard keys={keys} />
      </div>
    </div>
  )
}

export default App
