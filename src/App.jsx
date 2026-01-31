import {BrowserRouter,Route,Routes} from "react-router-dom"
import React from "react"
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"
import Layout from "./components/layout";
import Projects from "./Pages/Project";
import About from "./Pages/About";
export default function App(){
  return(
    <BrowserRouter>
    <Layout>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/My-Projects" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}