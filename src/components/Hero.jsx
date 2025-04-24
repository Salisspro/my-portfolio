import IMG from '../img/317752578_1361099784715126_2064839100156994520_n-removebg-preview (1).png'

export default function Hero() {
   return (
      <div className='mt-20 p-10'>
         <div className='flex items-center justify-center space-x-10'>

            <p className='text-4xl font-bold text-slate-50'>
               Hello, I am a <span className='text-blue-500'>React Developer</span>
            </p>

            <div className='w-[15em] rounded-full overflow-hidden border-4 border-blue-500 mb-10'>
               <img className='' src={IMG} alt="" />
            </div>

         </div>

         <p className='text-slate-300 text-lg font-mono md:text-3xl'>
                  I am a React developer with a passion for building web applications. I have experience in building responsive and user-friendly web applications using React, Tailwind CSS, and other modern web technologies.
                  I am always eager to learn new technologies and improve my skills. I am currently looking for opportunities to work on exciting projects and collaborate with other developers.
               </p>

      </div>
   )
}
