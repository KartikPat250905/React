import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)

  function addvalue()
  {
    counter += 1;
    if (counter > 20)
      counter = 20;
    setcounter(counter)
  }
  let decvalue = () =>{
    counter = counter - 1;
    if (counter < 0)
      counter = 0
    setcounter(counter)
  }
  return (
    <>
      <h1>Counter program</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button
      onClick={decvalue}
      >Remove value</button>
    </>
  )
}

export default App
