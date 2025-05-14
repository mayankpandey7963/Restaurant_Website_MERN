import React from 'react'
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


// Pages

  import Home from './Pages/Home'
  import About from './Pages/About'
  import Contact from './Pages/Contact'
  import Menu from './Pages/Menu'
  import Signup from './Components/Signup'
  import Login from './Components/Login'
  import ScrollToTop from './Components/ScrollToTop';


// Components

  import NavScrollExample from './Components/NavScrollExample'
  import Axios from '../Axios'

const App = () => {
  return (
    <div>
      
      <NavScrollExample/>
      <ScrollToTop/>
      <Axios/>  

    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/menu' element={<Menu/>} ></Route>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      
    </Routes>

    </div>
  )
}

export default App
