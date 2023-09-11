import React from "react";
import Customer from "./pages/Customer";
//import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CorporateLogin from "./corporate/CorporateLogin";
import ManagerLogin from "./manager/ManagerLogin";
import CorpSignup from "./corporate/CorpSignup";
import axios from "axios";
import Navbar from "./componets/Navbar"

export const instance = axios.create({
  baseURL: "https://y2w6k0cl74.execute-api.us-east-1.amazonaws.com/Prod/"
});


function App() {

  return (
    
    <div className="App">
    <header className="App-header">
    <h1>Geomagnaticians Unlimited&copy;</h1>
    <p>The geologists in us dictate that we will never take our customers for granite.</p>
    <div>
        <div>
            <BrowserRouter>
              <Navbar />
              <Routes>
             
              <Route path="/" >
                <Route index element={<Home />} />
                <Route path="corporate/*" element={<CorporateLogin/>} />
                <Route path="manager/*" element={<ManagerLogin /> }/>
                <Route path="Customer/*" element={<Customer /> }/>
                <Route path="Signup" element={<CorpSignup /> }/>
                <Route path="*" element={<NoPage />} />
              </Route>
              </Routes>
            </BrowserRouter>
        </div>
      </div>
       
        
      </header>
    </div>
  );
}

export default App;

