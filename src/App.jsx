/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Home, Login, Register } from "./modules";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
export default function App() {
  const [currentUser, setcurrentUser] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={currentUser ? <Home /> : <Register />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
