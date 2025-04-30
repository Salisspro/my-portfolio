
export default function Project() {
   return (
      <div className="p-10 min-h-screen ">
         <div className="flex flex-col items-center justify-center bg-gradient-to-t text-slate-300 rounded-lg p-10">
            <h1 className="text-5xl font-bold text-slate-300">Projects</h1>
            <p className="text-lg font-semibold md:text-3xl px-5 mt-5">Here are some of my projects that I have worked on.</p>
            <p className="text-lg font-semibold md:text-3xl px-5 mt-5">Feel free to check them out!</p>
         </div>

         <div>
            <p className="text-lg font-semibold md:text-3xl px-5 mt-5">1.</p>
            <p className="text-lg font-semibold md:text-3xl px-5 mt-5">saver</p>
            <p className="text-lg font-semibold md:text-3xl px-5 mt-5">A web application that allows users to save and manage their favorite decument.</p>
            <a href="https://saver-weld.vercel.app/">
               <button className="border text-white font-bold p-5 w-full rounded mt-5">View Project</button>
            </a>
         </div>

         <div className="mt-10">
         <p className="text-lg font-semibold md:text-3xl px-5 mt-5">2.</p>
         <p className="text-lg font-semibold md:text-3xl px-5 mt-5">my-school</p>
            <p >A web application that allows users to manage their school activities.</p>
            <a href="https://salisspro-jet.vercel.app/">
               <button className="border text-white font-bold p-5 w-full rounded mt-5">View Project</button>
            </a>
         </div>

         <div>
         <p className="text-lg font-semibold md:text-3xl px-5 mt-5">3.</p>
            <p className="text-lg font-semibold md:text-3xl px-5 mt-5">bussiness</p>
            <p className="text-lg font-semibold md:text-3xl px-5 mt-5">A web application that allows users to manage their business activities.</p>
            <a href="https://reaponsive-web.vercel.app/">
               <button className="border text-white font-bold p-5 rounded mt-5 w-full">View Project</button>
            </a>
         </div>

      </div>
   )
}
