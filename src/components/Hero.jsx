import { useState } from 'react'
import IMG from '../img/317752578_1361099784715126_2064839100156994520_n-removebg-preview (1).png'

export default function Hero() {
   const [readMore, setReadMore] = useState(false)

   return (
      <div className='mt-20 '>
         <div className='flex items-center justify-center space-x-10'>
            <div className='w-full rounded-lg overflow-hidden border-[1px]  border-blue-500 mb-10 mt-20 '>
               <img className=' w-full z-10  opacity-90' src={IMG} alt="" />

               <p className='text-4xl w-[10em] font-bold text-slate-50 z-10 absolute bottom-[3em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
               Hello, I am a<span className='text-blue-700'> React Developer</span>
            </p>
            </div>

         </div>

         <p className='text-slate-300 text-lg font-semibold md:text-3xl px-5'>
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
