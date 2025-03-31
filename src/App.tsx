import React from 'react';
import './App.css';
import Header from "./pages/header";
import Home from "./pages/index";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
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
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Todolist" element={<Todolist />} />
          <Route path="/Userinfo" element={<UserInfo />} />
          <Route path="/Userdashboard" element={<UserDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AdminInterface" element={<AdminInterface />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Card /> */}
      </BrowserRouter>
    </>
  )
};

export default App;
