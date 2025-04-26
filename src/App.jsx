

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MyOffer from './components/MyOffer'
import Skills from './components/Skills'
// import Contact from './components/router/Contact'


export default function App() {
  return (
    <div className='min-h-screen text-slate-50 bg-black'>
      <Header/>
      <Hero/>
      <Skills/>
      <MyOffer/>
      <Footer/>
      {/* <Contact/> */}
    </div>
  )
}
