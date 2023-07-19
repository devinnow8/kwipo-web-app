import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/main" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
