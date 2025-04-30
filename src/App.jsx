import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MyOffer from './components/MyOffer'
import Skills from './components/Skills'
import Contact from "./components/router/Contact";
import PageNot from "./components/router/PageNot";
import Main from "./components/Main";
import Project from "./components/router/Project";
import About from "./components/router/About";


export default function App() {

  return (
    <div  className='min-h-screen text-slate-50 bg-gradient-to-l to-slate-700 from-slate-900'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/my-offer" element={<MyOffer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<PageNot />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}
