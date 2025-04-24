import { useState } from "react"
import MENU from '../assets/icons/icon-menu.svg'
import CLOSE from '../assets/icons/icon-menu-close.svg'


export default function Header() {
   const [modal, setModal] = useState(false)
   return (
      <>
      <div className="bg-slate-950 text-slate-50">
         <header className="flex justify-between items-center p-6 fixed top-0 left-0 w-full z-10">
            <div className="text-3xl  font-bold text-slate-950 ">My Portfolio</div>
            <div className="hidden md:flex gap-8 text-slate-50 ">
               <a href="#skills">Skills</a>
               <a href="#my-offer">My Offer</a>
               <a href="#contact">Contact</a>
            </div>
            <button className="md:hidden" onClick={() => setModal(!modal)}>
               <img src={modal ? CLOSE : MENU} alt="" />
            </button>
         </header>
         {modal && (
            <div className="fixed top-0 left-0 w-full h-screen bg-slate-900/80 flex flex-col items-center justify-center gap-8 text-slate-50 text-4xl md:hidden">
               <a href="#skills" onClick={() => setModal(!modal)}>Skills</a>
               <a href="#my-offer" onClick={() => setModal(!modal)}>My Offer</a>
               <a href="#contact" onClick={() => setModal(!modal)}>Contact</a>
            </div>
         )}
      </div>
      </>
    )
}
