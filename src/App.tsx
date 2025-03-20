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
import { BrowserRouter, Navigate, Route, Routes } from "react-router";


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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
