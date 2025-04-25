import { useState } from 'react'
import IMG from '../img/317752578_1361099784715126_2064839100156994520_n-removebg-preview (1).png'

export default function Hero() {
   const [readMore, setReadMore] = useState(false)

   return (
      <div className='mt-[4em] '>
         <div className='flex items-center justify-center'>
            <div className='rounded-lg overflow-hidden my-[5em]'>
               <img className='opacity-50' src={IMG} alt="" />

               <p className='text-5xl w-[10em] bg-slate-950 p-4 font-bold text-slate-700 z-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] rounded-lg font-mono border-x-0'>
                  Hi, I am a<span className='text-blue-900'> React Developer</span>
               </p>

            </div>

         </div>

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
