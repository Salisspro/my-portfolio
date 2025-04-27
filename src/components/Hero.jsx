import { useState } from 'react'
import ICON from '../assets/icons/developer-png-9wxnnbpbatv5o2dn.png'

export default function Hero() {
   const [readMore, setReadMore] = useState(false)

   return (
      <div className='mt-[4em] '>
         <div className='flex items-center justify-center'>
            <div className='rounded-lg overflow-hidden my-[4em] '>
               <img className='opacity-50' src={ICON} alt="" />


               <p className='text-5xl w-[10em] p-4 font-bold text-slate-300 '>
                  Hi, I am a<span className='text-blue-900'> React Developer</span>
               </p>

            </div>

         </div>

         {/* className='' */}

         <p className='text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
            I am a React developer with a passion for building web applications. I have experience in building responsive and user-friendly web applications using React, Tailwind CSS, and other modern web technologies.
            {readMore && (
               <span>
                  I have a strong understanding of React concepts such as state management, component lifecycle, and hooks. I am also familiar with RESTful APIs and have experience in integrating them into web applications. I am always eager to learn new technologies and improve my skills.
               </span>
            )}
            <button
               className='text-blue-500 font-semibold'
               onClick={() => setReadMore(!readMore)}
            >
               {readMore ? 'Read Less' : 'Read More'}

            </button>
         </p>

      </div>
   )
}
