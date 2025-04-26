

export default function Contact() {
   return (
      <div className='min-h-screen text-slate-50 bg-black'>
         <div className='flex flex-col items-center justify-center p-10'>
            <h1 className='text-5xl font-bold text-slate-300'>Contact Me</h1>
            <p className='text-center text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5'>
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
