import { useState } from "react"
import MENU from '../assets/icons/icon-menu.svg'
import CLOSE from '../assets/icons/icon-menu-close.svg'
import Contact from "./router/Contact"


export default function Header() {
   const [modal, setModal] = useState(false)
   const [showContact, setShowContact] = useState(false)
   return (
      <div className="
         bg-slate-300 text-slate-900 w-full z-10 flex flex-col items-center justify-center">
         <header className="flex items-center justify-between px-5 py-7  bg-white text-slate-900 w-full z-10">
            <div className="text-2xl font-bold">My Portfolio</div>
            <nav className="hidden md:flex space-x-4 text-slate-950">
               <a href="#about" className="hover:text-blue-500">About</a>
               <a href="#projects" className="hover:text-blue-500">Projects</a>
               <a href="#contact" className="hover:text-blue-500">Contact</a>
            </nav>
            <button onClick={() => setModal(!modal)} className="md:hidden">
               <img src={modal ? CLOSE : MENU} alt="" />
            </button>
         </header>

         {modal && (
            <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-80 flex flex-col items-center justify-center z-20">
               <nav className="flex flex-col space-y-4 text-center text-xl font-semibold text-slate-300 transition-all duration-300">
                  <a href="../About" onClick={() => setModal(false)}>About</a>
                  <a href="../projects" onClick={() => setModal(false)}>Projects</a>
                  <a href="../Contact" onClick={() => setModal(false)}>Contact</a>
               </nav>
            </div>
         )}

         {showContact && (
            <Contact setShowContact={setShowContact} />
         )}
         <div className="fixed bottom-4 right-4 z-20">
            <button onClick={() => setShowContact(!showContact)} className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ">
               Contact Me
            </button>
         </div>
      </div>
   )
}
