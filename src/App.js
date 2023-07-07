import React from "react";
// React router imports
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import './App.css';

import Home from "./Views/Home";
import About from "./Views/About";
import ContactUs from "./Views/ContactUs";
import Product from "./Views/Product";




function App(){
  return(
    <div>
      <Router>
        <Header/>
      
          {/* Move ul and links to navigation component */}
          <div className="p-3">
            <Routes>
              <Route path='/' element={<Home/>}>
              </Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/contact-us" element={<ContactUs/>}></Route>
              <Route path="/products/:id" element={<Product/>}></Route>


            </Routes>
          </div>

        <Footer/>
      </Router>

    </div>
  )
}

export default App;