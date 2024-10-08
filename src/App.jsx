import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleBook from "./pages/singleBook/SingleBook";
import Navbar from "./pages/components/Navbar/Navbar";
import AddBook from "./pages/addBook/AddBook";
import Edit from "./pages/edit/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlebook/:id" element={<SingleBook />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
