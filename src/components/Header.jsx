import { useState } from "react"
import MENU from '../assets/icons/icon-menu.svg'
import CLOSE from '../assets/icons/icon-menu-close.svg'
import Contact from "./router/Contact"


export default function Header() {
   const [modal, setModal] = useState(false)
   const [showContact, setShowContact] = useState(false)
   return (
      <div className="
          text-slate-900 w-full z-10 flex flex-col items-center justify-center fixed top-0">
         <header className="flex items-center justify-between px-5 py-7  bg-gradient-to-l from-slate-600 to-slate-200 text-slate-900 w-full z-10">
            <div className="text-2xl font-bold">My Portfolio</div>
            <nav className="hidden md:flex space-x-4 text-slate-950 text-3xl font-medium">
               <a href="/About" className="hover:text-blue-500">About</a>
               <a href="/Projects" className="hover:text-blue-500">Projects</a>
               <a href="/Contact" className="hover:text-blue-500">Contact</a>
            </nav>
            <button onClick={() => setModal(!modal)} className="md:hidden">
               <img src={modal ? CLOSE : MENU} alt="" />
            </button>
         </header>

         {modal && (
            <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-80 flex flex-col items-center justify-center z-20">
               <nav className="flex flex-col space-y-4 text-center text-3xl font-semibold text-slate-300 transition-all duration-300 font-mono">
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
            {/* <a href="/Contact">
            <button className=" text-white px-4 py-2 rounded-full shadow-lg border transition duration-300 bg-gradient-to-t to-slate-700">
               Contact Me
            </button>
            </a> */}
         </div>
      </div>
   )
}
