import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Navbar from './Component/Navbar'
import Error from './Component/Error'
import Footer from './Component/Footer'
import '../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
