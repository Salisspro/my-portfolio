import { useState } from "react"
import Logo from './icons/vecteezy_cartoon-happy-alphabet-letter-and-number_44029103.png'
export default function Header() {
   const [modal, setModal] = useState(true)


   const handleClick = () => {
      setModal(false)
   }

   return (
      <div className="mb-10  flex items-center justify-between gap-5">
         <div className="flex items-center">

            <img
               className="w-[30px]"
               src={Logo} alt="" />
            <h1 className="text-4xl font-mono text-slate-100 mt-5">alisspro</h1>

         </div>


         <nav className=" flex gap-10 text-3xl ">
            </nav>
         <div className="text-center" onClick={handleClick}>

            <div>
               {modal ? <div>
               </div>
                  :
                  <div
                     className="container"
                  >
                  </div>}
            </div>
         </div>
      </div>
   )
}

