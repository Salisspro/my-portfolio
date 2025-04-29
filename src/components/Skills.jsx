
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
                  Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.
               </p>
            </div>
            <div className="rounded-full md:w-[10em] flex items-center space-x-2 md:grid">
               {/* <img className="w-[5em] h-[5em] rounded-full" src={IMG2} alt="" /> */}
               <p className="">
                  Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in HTML or XML.
               </p>
            </div>

            <div className="border-blue-600  rounded-full md:w-[10em] flex items-center space-x-2 md:grid ">
               {/* <img className="w-[5em] h-[5em] rounded-full" src={IMG3} alt="" /> */}
               <p className="">
                  JavaScript, a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
               </p>
            </div>
            <div className=" md:grid  rounded-full md:w-[10em] flex items-center space-x-2 ">
               {/* <img className="w-[5em] h-[5em] rounded-full" src={IMG4} alt="" /> */}
               <p className="">
                  React, a JavaScript library for building user interfaces based on UI components. It is maintained by Facebook and a community of individual developers and companies.
               </p>
            </div>
         </div>

         {/* <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
               <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">Card Title</h2>
               <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
               </div>
            </div>
         </div> */}
      </div>
   )
}
