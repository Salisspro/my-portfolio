

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'


export default function App() {
  return (
    <div className='min-h-screen text-slate-50 bg-slate-950'>
      <Header/>
      <Hero/>
      <Skills/>
      <Footer/>
    </div>
  )
}
