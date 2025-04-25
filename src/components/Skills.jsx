
import IMG1 from '../assets/img/png-transparent-logo-html-html5.png'
import IMG2 from '../assets/img/hd-css3-round-logo-icon-transparent-png-701751694771807mljmgxztmt.png'


import IMG3 from '../assets/img/images (2).png'

import IMG4 from '../assets/img/images (1).png'



export default function Skills() {
  return (
    <div className=" m-1 transition-all duration-300 bg-slate-900 text-slate-50">
      <h1 className="text-6xl my-5 p-2 font-semibold">My skills</h1>
      <div className="font-semibold md:flex grid grid-cols-1 items-center justify-center md:space-x-5 space-y-5">
         <div className="md:grid rounded-full  md:w-[10em] flex items-center space-x-2">
            <img className="w-[5em] h-[5em] rounded-full" src={IMG1} alt="" />
            <p className="text-sm p-2">
            Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.
            </p>
         </div>
         <div className="rounded-full md:w-[10em] flex items-center space-x-2 md:grid">
            <img className="w-[5em] h-[5em] rounded-full" src={IMG2} alt="" />
            <p className="text-sm p-2">
            Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML or XML.
            </p>
         </div>

         <div className="border-blue-600  rounded-full md:w-[10em] flex items-center space-x-2 md:grid ">
            <img className="w-[5em] h-[5em] rounded-full" src={IMG3} alt="" />
            <p className="text-sm p-2">
            JavaScript, a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
            </p>
         </div>
         <div className=" md:grid  rounded-full md:w-[10em] flex items-center space-x-2 ">
            <img className="w-[5em] h-[5em] rounded-full" src={IMG4} alt="" />
            <p className="text-sm p-2">
            React, a JavaScript library for building user interfaces based on UI components. It is maintained by Facebook and a community of individual developers and companies.
            </p>
         </div>
      </div>
    </div>
  )
}
