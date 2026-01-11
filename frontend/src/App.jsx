import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/home'
import {Toaster} from "sonner"; 
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPages from './pages/CollectionPages';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Toaster position="rop-right"/>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="collections/:collection" element={<CollectionPages/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
