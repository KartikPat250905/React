import { useState } from 'react'
import './App.css'
import {Inputbox} from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedamount, setConvertedamount] = useState(0)
  const [currencydata] = useCurrencyInfo("")

  function converter()
  {
    setConvertedamount(currencydata[from][to] * amount)
  }
  return (
    <>
    <div className='flex justify-center items-center h-screen flex-col'>
      <div className='w-2/6 hborder border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <div className='w-full flex justify-center px-2 pb-1'>
          <Inputbox label='From'></Inputbox>
        </div>
          <div className="relative w-full h-0.5">
            <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            >
              swap
            </button>
          </div>
        <div className='w-full flex justify-center px-2 pt-1'>
          <Inputbox label='To'></Inputbox>
        </div>
        <div className='flex justify-center px-3 mt-4'>
          <button className='w-full py-2 border-white rounded-md bg-blue-600' onClick={converter}>Convert</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
