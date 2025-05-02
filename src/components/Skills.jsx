
import LOGO from '../assets/icons/front-end-developer-tn.webp'


export default function Skills() {
   return (
      <div className=" my-10 transition-all duration-300 bg-white text-slate-900 main ">

         <div className="flex items-center justify-center 
         bg-blue-600 ">
            <img className="w-full h-[20em] " src={LOGO} alt="" />
         </div>


         <div className=" md:grid grid-cols-2  items-center justify-center md:gap-20 p-10 space-y-5">

            <div>

               <p className='md:text-[23px] md:font-extralight md:font-mono'>
                  <span className='md:text-3xl'>HTML</span>
                  <br />
                  Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.
               </p>
               <hr className='bg-slate-500' />
            </div>

            <div className="">
               <p className='md:text-[23px] md:font-extralight md:font-mono'>
                  <span className='md:text-4xl'>Css</span>
                  <br />
                  Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML or XML.
               </p>
               <hr className='bg-slate-500' />
            </div>

            <div >
               <p className='md:text-[23px] md:font-extralight md:font-mono'>
                  <span className='md:text-3xl'>JavaScript</span> <br />
                  JavaScript, a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
               </p>
               <hr className='bg-slate-500' />
            </div>

            <div className="">
               <p className='md:text-[23px] md:font-extralight md:font-mono'>
                  <span className='md:text-3xl'>React</span> <br />
                  React, a JavaScript library for building user interfaces based on UI components. It is maintained by Facebook and a community of individual developers and companies.
               </p>

            </div>
         </div>

      </div>
   )
}
