import { useState ,useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const  [length, setlength] = useState(6)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowd] = useState(false)
  const [password, setpassword] = useState("")
  const password_ref = useRef(null)

  const password_generator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberallowed) str += "0123456789"
    if (charallowed) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    for(let i = 1; i <= length;i++)
    {
      let choice = Math.floor(Math.random() * str.length);
      pass += str[choice]
    }
    setpassword(pass)

  },[length, numberallowed, charallowed, setpassword])

  const copypassword = useCallback(() => {
    password_ref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => password_generator(),[numberallowed, charallowed, length, password_generator])
  return (
    <>
      <div className='w-full max-w-4xl mx-auto shadow-md rounded-lg px-4 bg-gray-600 text-orange-500 my-8 flex-col justify-center align-middle'>
          <p className='text-center pb-2 pt-2'>Password Generator</p>
          <div className='flex shadow-xl rounded overflow-hidden mb-4'>
              <input type="text" value={password} className='outline-none w-full rounded py-1 px-3 mb-3' placeholder='Password' readOnly ref={password_ref}/>
              <button className='rounded bg-blue-700 outline-none text-white shrink-0 py-1 mb-3 py-1 px-3' onClick={copypassword}>copy</button>
          </div>
          <div className='flex flex-row gap-3'>
          <div className='pb-2 display-inline'>
              <div className="gap-3">
                <input type="range" min={6} max={100} value={length} onChange={(e) => setlength(e.target.value)} className='cursor-pointer'/>
                <label className='text-orange-500 pl-1 pb-1'>Length : {length}</label>
              </div>
          </div>
          <div className='pb-2'>
            <div>
              <input type="checkbox" className='cursor-pointer' defaultChecked={numberallowed} onChange={() => setnumberallowed((prev) => !prev)}/>
              <label className='text-orange-500 pl-1 pb-1'>Numbers</label>
            </div>
          </div>
          <div className='pb-2'>
            <div>
              <input type="checkbox" className='cursor-pointer' defaultChecked={charallowed} onChange={() => setcharallowd((prev) => !prev)}/>
              <label className='text-orange-500 pl-1 pb-1'>Special Character</label>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
