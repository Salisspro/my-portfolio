
export default function Skills() {
  return (
    <div className="p-10">
      <h1 className="text-4xl my-5">My skills</h1>
      <div className="md:flex grid grid-cols-1 items-center justify-center md:space-x-5 space-y-5">
         <div className="border-blue-600 border h-[10em] rounded md:w-[10em]">HTML</div>
         <div className="border-blue-600 border h-[10em] rounded md:w-[10em]">CSS</div>
         <div className="border-blue-600 border h-[10em] md:w-[10em]">JAVASCRIPT</div>
         <div className="border-blue-600  border h-[10em] rounded md:w-[10em]">REACT JS</div>
      </div>
    </div>
  )
}
