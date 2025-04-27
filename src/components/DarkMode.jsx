
import { useState } from 'react'
import { useRef } from 'react'

export default function DarkMode() {
   const [darkMode, setDarkMode] = useState(false)
   const ref = useRef(null)
  return (
    <div>
      <div className='flex items-center justify-center'>
         <button className='bg-slate-200 text-slate-900 p-2 rounded-md' onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
         </button>
      </div>
      <div className={`min-h-screen ${darkMode ? 'bg-black text-slate-50' : 'bg-white text-slate-900'}`} ref={ref}>
         <h1 className='text-5xl font-bold'>Hello World</h1>
         <p className='text-lg'>This is a paragraph.</p>
      </div>
      <div className='flex items-center justify-center'>
         <button className='bg-slate-200 text-slate-900 p-2 rounded-md' onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
         </button>
         </div>
      <div className={`min-h-screen ${darkMode ? 'bg-black text-slate-50' : 'bg-white text-slate-900'}`} ref={ref}>
         <h1 className='text-5xl font-bold'>Hello World</h1>
         <p className='text-lg'>This is a paragraph.</p>
         </div>
    </div>
  )
}
