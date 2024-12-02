import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
