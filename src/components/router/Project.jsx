
export default function Project() {
   return (
      <div className="p-5 min-h-screen ">
         <div className="text-center bg-gradient-to-t text-slate-300 rounded-lg p-5">
            <h1 className="text-5xl font-bold text-slate-300">Projects</h1>
            <p className=" font-semibold md:text-3xl mt-5 ">Here are some of my projects that I have worked on.</p>
            <p className=" font-semibold md:text-3xl ">Feel free to check them out!</p>
         </div>

         <div className="mt-10">

            <div>
               <p className=" font-semibold md:text-3xl ">1.</p>
               <p className="text-lg font-semibold md:text-3xl ">saver</p>
               <p className=" md:text-3xl ">A web application that allows users to save and manage their favorite decument.</p>
               <a href="https://saver-weld.vercel.app/">
                  <button className=" border text-white font-bold p-5 w-full rounded mt-5">View Project</button>
               </a>
            </div>

            <div className="mt-10">
               <p className="text-lg font-semibold md:text-3xl ">2.</p>
               <p className="text-lg font-semibold md:text-3xl ">my-school</p>
               <p >A web application that allows users to manage their school activities.</p>
               <a href="https://salisspro-jet.vercel.app/">
                  <button className="border text-white font-bold p-5 w-full rounded mt-5">View Project</button>
               </a>
            </div>

            <div className="mt-5">
               <p className="text-lg font-semibold md:text-3xl ">3.</p>
               <p className="text-lg font-semibold md:text-3xl">bussiness</p>
               <p className=" md:text-3xl  mt-1">A web application that allows users to manage their business activities.</p>
               <a href="https://reaponsive-web.vercel.app/">
                  <button className="border text-white font-bold p-5 rounded mt-5 w-full">View Project</button>
               </a>
            </div>
         </div>

      </div>
   )
}
