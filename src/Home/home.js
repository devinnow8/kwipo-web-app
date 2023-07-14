
import React from "react";
import Main from "./Main"
import Login from "./Login"
import { Routes,Route,BrowserRouter } from "react-router-dom";


function Home() {


    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/main" element={<Main/>} />
                </Routes>
        
              </BrowserRouter> 
        
        
            )

}

      
    
  export default Home;