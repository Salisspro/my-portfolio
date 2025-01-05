import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import FireStore from './components/firestore/FireStore'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import {  } from "react-router-dom";

import Home from './router/Home'
import About from './router/About'
import Sign from './components/Sign'
import { useState } from 'react'
import Logo from '../src/components/icons/images (3).jpg'
// import Contact from './router/Contact'



function App() {
  const [modal, setModal] = useState(true)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <div className='grid bg-zinc-800 h-[100%] p-[32px] shadow-[0_0_10px_white] rounded-lg '>
        <BrowserRouter>
          <div
            className='signModal'
            onClick={handleModal}>
            {modal ? <div>
              <img className='w-[35px] rounded-lg hover:shadow-[0_0_10px_white] transition-all ease-out mt-10'
                src={Logo} alt="" />
              {/* <span className='caret'></span> */}
            </div> : <div className='mb-10 text-3xl flex text-slate-100 gap-10 font-sans'>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to='Sign'>Sign in</Link>
            </div>}
          </div>

          <Header />
          <Hero />

          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Sign' element={<Sign />} />
          </Routes>

          <FireStore />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
