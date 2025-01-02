
import IMG from '../assets/images/developer-8764524.jpg'
export default function Hero() {
   return (
      <div className='group grid md:flex items-center justify-center m-2 gap-10 font-mono'>


            <div>
               <img
                  className='w-full rounded-lg h-[350px]'
                  src={IMG} alt="" />
            </div>

            <div>

               <span>Hi there</span>
               <h1 className='font-mono text-slate-100 text-3xl mb-3 mt-3'>Software Developer</h1>
               <p className="text-slate-50">Hi, i am Salisu Yushau, a skilled React native developer with a passion for building scalable and efficient mobile application.</p>

               <div className='flex gap-10'>

               <button className=" bg-yellow-600 p-3 mt-5 text-slate-700 font-semibold rounded-md  font-mono hover:shadow-[0_0_5px_white] transition-all ease-in-out">Contact us</button>

               <button className="font-semibold bg-slate-700 text-slate-100 p-3 mt-5  rounded-md  font-mono hover:shadow-[0_0_5px_white] transition-all ease-in-out">Hire Salisspro</button>
               </div>
            </div>

      </div>
   )
}
