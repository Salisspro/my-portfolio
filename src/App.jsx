import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Try from './components/Sign'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from './router/Home'
import About from './router/About'



function App() {

  return (
    <>
      <BrowserRouter>
        <div className='grid bg-zinc-800 h-[100%] p-[32px] shadow-[0_0_10px_white] rounded-lg '>
          <Header />

          <div className='text-3xl flex text-slate-100 gap-10 font-mono'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to='Try'>Log in</Link>
          </div>

          <Routes>


            <Route path="Home" element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Try' element={<Try />} />

          </Routes>

          <Hero />
          <Footer />

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
