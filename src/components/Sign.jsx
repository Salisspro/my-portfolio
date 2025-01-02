
import Google from './icons/vecteezy_google-search-icon-google-product-illustration_12871371.png'
import Cancel from './icons/3d-rendering-backspace-isolated-free-png.png'

export default function Sign() {



   return (
      <>
         <div className="m-3">
            <button
               onClick={() => console.log('thanks')}
               className='closes '>
               <img
                  className='w-[40px]'
                  src={Cancel} alt="" />
            </button>
            
            <input
               className="border-2 rounded-lg mb-2  h-[40px] font-mono w-full"
               type="text" placeholder='Email..' />
            <input
               className="border-2 rounded-lg mb-2 h-[40px] font-mono w-full"
               type="password" placeholder='Password...'/>

            <div className='mt-5 flex items-center gap-5 m-4'>
               <button className="bg-slate-600 p-2 rounded-lg font-mono">submit</button>
               <button className='bg-slate-700 p-2 rounded-lg font-mono w-[40px] ml-2 '>
                  <img
                     className='w-[20px] ml-2'
                     src={Google} alt="" />
               </button>
               <button className='bg-slate-200 p-2 rounded-lg font-mono'>Log out</button>
            <button className='bg-yellow-700 p-2 rounded-lg font-mono mt-2'>Create Account</button>
            </div>
         </div>
      </>
   )
}
