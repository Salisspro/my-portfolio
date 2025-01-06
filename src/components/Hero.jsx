import { useState } from 'react'
import IMG from '../assets/images/developer-8764524.jpg'
export default function Hero() {
   const [readMore, setReadMore] = useState(false)


   const handleReadMore = () => {
      setReadMore(!readMore)

   }
   return (
      <div className='group grid md:flex items-center justify-center m-2 gap-10 font-mono mb-[5rem]'>

         <div>
            <img
               className='w-full rounded-lg h-[350px]'
               src={IMG} alt="" />
         </div>

         <div>

            <h1 className=' text-slate-300'>Hi there</h1>
            <h1 className='font-mono text-slate-300 text-5xl mb-3 mt-3 font-bold'>Software Developer</h1>

            <p className="text-slate-50">Hi, i am Salisu Yushau, a skilled React native developer with a passion for building scalable and efficient mobile application {readMore && 'Thank you. we have done everything'}_
               <span onClick={handleReadMore} className='cursor-pointer  animate-pulse'>read more</span>

               <span className='caret'></span>
            </p>

            <div className='flex gap-10 mt-5'>

               <button className="border p-4 mt-5 text-slate-200 font-semibold rounded-md  font-mono hover:shadow-[0_0_5px_white] transition-all ease-in-out">Contact us</button>

               <button className="font-semibold border text-slate-100 p-4 mt-5  rounded-md  font-mono hover:shadow-[0_0_5px_white] transition-all ease-in-out ">Hire Salisspro</button>
            </div>
         </div>

      </div>
   )
}
