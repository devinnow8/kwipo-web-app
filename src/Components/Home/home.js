import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../Main";
import Login from "../Login";
import SignUp from "../SignUp";

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/main" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
