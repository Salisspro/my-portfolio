import { useState } from "react"
// import Try from "./Try"
import Logo from './icons/vecteezy_comic-halftone-alphabet-letter-and-number_43233456.png'
export default function Header() {
   const [modal, setModal] = useState(true)


   const handleClick = () => {
      setModal(false)
   }

   return (
      <div className="text-slate-50 mb-10  flex items-center justify-between gap-5">
         <div className="flex items-center">

            <img
               className="w-[40px]"
               src={Logo} alt="" />
            <a href="#" className="text-yellow-500 text-5xl font-mono ">alisspro</a>
         </div>


         <nav className=" flex gap-10 text-3xl ">
            {/* <a href="" className=" active">Home</a> */}
            {/* <a href="" className=" active">About</a>
            <a href="" className=" active">Cotact</a> */}

         </nav>
         <div className="text-center" onClick={handleClick}>

            <div>
               {modal ? <div>
                  <span className="font-mono cursor-pointer animate-pulse">Log in</span>
                  <span className="caret"></span>
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

