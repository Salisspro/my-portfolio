import { useState } from "react"
// import Try from "./Try"
import Logo from './icons/vecteezy_cartoon-happy-alphabet-letter-and-number_44029103.png'
export default function Header() {
   const [modal, setModal] = useState(true)


   const handleClick = () => {
      setModal(false)
   }

   return (
      <div className="text-slate-50 mb-10  flex items-center justify-between gap-5">
         <div className="flex items-center">

            <img
               className="w-[40px] logo-spin"
               src={Logo} alt="" />
            <p className="text-slate-300 text-5xl font-mono  mt-10">alisspro</p>
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
                     {/* <Try /> */}
                  </div>}
            </div>
         </div>
      </div>
   )
}

