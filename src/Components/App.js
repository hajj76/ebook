import React from "react";
import Navbar from "./Navbar";
import Googlelogin from "./Googlelogin";
import Welcome from "./Welcome";
import Mainpage from "./Mainpage";

 import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App(){
    return (
        <Router>
        
            <Navbar />
            
            <Welcome />
            {/* <Googlelogin /> */}
           
        <Routes>

           <Route path="/" element={<Googlelogin />} />

            <Route path="/home" element= {<Mainpage />} /> 
            </Routes>

             </Router> 

            

        
    )
}
export default App;