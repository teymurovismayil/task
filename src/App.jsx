import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss'
import { Navbar } from './components/Navbar';
import { Slogan } from './components/Slogan';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import { AddPages } from './pages/AddPages';
import Edit from './pages/Edit';



function App() {




  return (
    <>
   

     <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Admin/>} path='/admin'></Route>
      <Route element={<AddPages/>} path='/addpage'></Route>
      <Route element={<Edit/>} path='/edit/:id'></Route>

     </Routes>


     

    </>
  )
}

export default App
