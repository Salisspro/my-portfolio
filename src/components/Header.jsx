

export default function Header() {
  return (
    <div>
      <div className='flex justify-between items-center p-5'>
        <div>

        <h1 className='text-2xl font-bold'>Salisu Yushau</h1>
        </div>
        <nav className='flex gap-5 hover:gap-10 transition-all duration-300'>
          <a href="#about" className='text-lg'>About</a>
          <a href="#projects" className='text-lg'>Projects</a>
          <a href="#contact" className='text-lg'>Contact</a>
        </nav>
      </div>
      </div>
  )
}
