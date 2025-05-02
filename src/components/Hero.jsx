import { useState } from 'react'
import IMG from '../assets/img/317752578_1361099784715126_2064839100156994520_n-removebg-preview (1).png'

export default function Hero() {
   const [readMore, setReadMore] = useState(false)

   return (
      <div className='mt-[3em]'>
         <h1 className='text-slate-300 absolute top-[10em]'>Yo!! Welcome</h1>
         <div className='flex items-center justify-center'>

            <div className='rounded-lg overflow-hidden my-[4em] md:my-[8em]  h-[23em] md:h-[30em] bg-gradient-to-b from-slate-900 to-slate-700 flex items-center justify-center w-full relative mt-40 md:grid md:grid-cols-2'>
               

               <img className='opacity-50 w-full md:w-[30em]' src={IMG} alt="" />

               <div className='text-5xl w-[10em] p-4 font-bold absolute bottom-0 ml-2'>

                  <p>
                     Hi, I am a<span className='text-slate-200'> React Developer</span>
                  </p>
               </div>
            </div>
         </div>

         <p className='text-slate-300 text-lg md:text-3xl px-1 -mt-10 font-semibold'>
            I am a React developer with a passion for building web applications. I have experience in building responsive and user-friendly web applications using React, Tailwind CSS, and other modern web technologies.{readMore && (
               <span className='text-slate-300 text-lg md:text-3xl px-5 mt-5'>I have a strong understanding of React concepts such as state management, component lifecycle, and hooks. I am also familiar with RESTful APIs and have experience in integrating them into web applications. I am always eager to learn new technologies and improve my skills.
               </span>
            )}
            <button
               className='text-blue-500 font-semibold'
               onClick={() => setReadMore(!readMore)}>{readMore ? 'Read Less' : 'Read More'}

            </button>
         </p>

      </div>
   )
}
