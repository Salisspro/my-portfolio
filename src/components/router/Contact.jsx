import IMG from '../../assets/img/spam-isolated-d-cartoon-vector-illustrations-confused-man-getting-many-emails-laptop-screen-technology-looking-network-270512143.webp'

export default function Contact() {
   return (
      <div className='min-h-screen text-slate-50 bg-black'>
         <div className='flex flex-col items-center justify-center p-20'>
            <h1 className='text-5xl font-bold text-slate-300'>Contact Me</h1>
            <img className='w-[10em] h-[10em] rounded-full mt-5' src={IMG} alt="Contact" />
            <p className='text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
               I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <p className='text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
               Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            
               
            <p className=' text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
               If you have any questions or would like to get in touch, feel free to reach out to me via email or LinkedIn.
            </p>
         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
               Email: <a href="mailto:salisspro@gmail.com" target="_blank" rel="noopener noreferrer">
                  <span className='text-blue-500'>
                     salisspro@gmail.com
                  </span>
               </a>
            </p>


         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
               LinkedIn: <a href="https://www.linkedin.com/in/salis-s-pro-1147462aa/" target="_blank" rel="noopener noreferrer">
                  <span className='text-blue-500'>Salis S Pro</span>
               </a>
            </p>
         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
               GitHub: <a href="https://github.com/Salisspro" target="_blank" rel="noopener noreferrer">
                  <span className='text-blue-500'>Salisspro</span>
               </a>
            </p>
         </div>
      </div>

   )
}
