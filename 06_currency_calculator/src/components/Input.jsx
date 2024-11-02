import React from 'react'

function Inputbox({
    label = "<label>",
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions = [],
    selectcurrency = "usd",
    className = ""

}) {
  return (
    <div className={`bg-white w-full rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2 pl-3'>
            <label className='text-black/40 inline-block mb-3'>
                {label}
            </label>
            <input className="w-full py-1.5 outline-none bg-transparent" type="number" min={0} placeholder='Amount' value={amount} onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}/>
        </div>
        <div className='w-1/2 pl-3 pr-3'>
            <label className='text-black/40 inline-block mb-3 w-full text-end'>
                Currency type
            </label>
            <br />
            <select value={selectcurrency} className='rounded-lg w-full py-1.5' onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}>

                {currencyoptions.map((currency) => {
                    <option key={currency} value={currency}>
                        {currency.toUpperCase}
                    </option>
                })}
            </select>
        </div>
    </div>
  )
}

export default Inputbox