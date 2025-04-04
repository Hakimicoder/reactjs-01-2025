import React from 'react';
import './App.css';
import Header from "./pages/header";
import Home from "./pages/index";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Todolist from "./pages/todolist/index";
import NotFound from "./pages/error/NotFound";
import Button from "./pages/bouton/button";
import UserInfo from "./pages/user/info/";
import UserDashboard from "./pages/user/dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AdminDashboard from './pages/admin/dashboard';
import AdminInterface from './pages/admin/dashboard';
import Card from './cards';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Navigate to={`home`} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/Todolist" element={<Todolist />} />
          
          <Route path="/auth/Register" element={<Register />} />
          <Route path="/user/info" element={<UserInfo />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
