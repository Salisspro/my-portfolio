import IMG from '../../assets/img/spam-isolated-d-cartoon-vector-illustrations-confused-man-getting-many-emails-laptop-screen-technology-looking-network-270512143.webp'

import Icon1 from '../../assets/icons/download (3).png'
import Icon2 from '../../assets/icons/images (3).png'
import Icon3 from '../../assets/icons/download (4).png'
import Icon4 from '../../assets/icons/phone-call.png'

export default function Contact() {
   return (
      <div className=' bg-gradient-to-t from-gray-900 to-slate-600 min-h-screen flex flex-col items-center justify-center relative'>
         <div className='flex flex-col items-center justify-center g-gradient-to-t from-slate-800 to-slate-600 text-slate-300 rounded-lg p-10'>
            <h1 className='text-5xl font-bold text-slate-300'>Contact Me</h1>
            <img className='w-[10em] h-[10em] rounded-full mt-5' src={IMG} alt="Contact" />
            <p className=' text-lg font-semibold md:text-3xl px-5 mt-5'>
               I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <p className=' text-lg font-semibold md:text-3xl px-5 mt-5 '>
               Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>

            <p className='text-lg font-semibold md:text-3xl px-5 mt-5'>
               If you have any questions or would like to get in touch, feel free to reach out to me via email or LinkedIn.
            </p>
         </div>

         <div className='flex items-center justify-center  bg-white text-slate-300 rounded-lg  absolute bottom-0 right-0 left-0 space-x-5 flex-wrap md:bottom-0 md:p-5'>
            <div className='flex flex-col items-center justify-center'>
               <p className='text-slate-700 text-lg font-semibold md:text-3xl px-5 mt-5'>
                  <div className='flex items-center space-x-2'>
                     <img className='w-[2em] h-[2em] rounded-full' src={Icon1} alt="" />
                     <a href="mailto:salisspro@gmail.com" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-500 text-sm'>
                           Email</span>

                     </a>

                  </div>
               </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
               <p className='text-slate-700 text-lg font-semibold md:text-3xl px-5 mt-5'>
                  <div className='flex items-center '>
                     <img className='w-[3em] h-[3em] rounded-full' src={Icon2} alt="" />
                     <a href="https://www.linkedin.com/in/salis-s-pro-1147462aa/" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-500 text-sm'>LinkedIn</span>
                     </a>
                  </div>
               </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
               <p className='text-slate-700 text-lg font-semibold md:text-3xl px-5 mt-5'>
                  <div className='flex items-center space-x-2 '>

                     <img className='w-[2em] h-[2em] rounded-full ' src={Icon3} alt="" />
                     <a href="https://github.com/Salisspro" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-500 text-sm'>GitHub</span>
                     </a>
                  </div>
               </p>
            </div>

            <div className='flex flex-col items-center justify-center'>
               <p className='text-slate-700 text-lg font-semibold md:text-3xl px-5 mt-5'>
                  <div className='flex items-center space-x-2 '>

                     <img className='w-[2em] h-[2em] rounded-full ' src={Icon4} alt="" />
                     <a href="tel:+2349125303046" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-500 text-sm'>Call </span>
                     </a>
                  </div>
               </p>
            </div>

         </div>
      </div>

   )
}
