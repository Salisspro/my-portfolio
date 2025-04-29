
import IMAGE from '../assets/icons/front-end-developer-tn.webp'



export default function Skills() {
   return (
      <div className=" my-10 transition-all duration-300 bg-white text-slate-900  rounded-lg p-5 main">
         <h1 className="text-6xl my-5 p-5 font-semibold">My skills</h1>
         <div className="flex items-center justify-center 
         ">
            <img className="w-full h-[20em] bg-blue-500 shadow-lg shadow-blue-500/50" src={IMAGE} alt="" />
         </div>
         <div className=" md:flex grid grid-cols-1 items-center justify-center md:space-x-5 space-y-5 p-10">
            <div className="md:grid rounded-full  md:w-[10em] flex items-center space-x-2">
               
               <p className="">
                  <span>html</span> <br />
                  Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.
               </p>
            </div>
            <div className="rounded-full md:w-[10em] flex items-center space-x-2 md:grid">
               
               <p className="">
                  <span>css</span> <br />
                  Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML or XML.
               </p>
            </div>

            <div className="border-blue-600  rounded-full md:w-[10em] flex items-center space-x-2 md:grid ">
               
               <p className="">
                  <span>JavaScript</span> <br />
                  JavaScript, a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
               </p>
            </div>
            <div className=" md:grid  rounded-full md:w-[10em] flex items-center space-x-2 ">
               
               <p className="">
                  <span>React</span> <br />
                  React, a JavaScript library for building user interfaces based on UI components. It is maintained by Facebook and a community of individual developers and companies.
               </p>
            </div>
         </div>

      </div>
   )
}
