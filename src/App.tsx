import React from "react";
import "./App.css"
import {Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./contents";
import Footer from "./Footer";
import Produit from "./Produit";


function App() {
  return (
    <div>
      <Navbar />
      <Content>
      <Routes>
        <Route path="/" Component={()=><div className="Search">
        <label htmlFor="input">Recherche</label>
        <input id='input' type="search" />
        <Produit />
        </div>
        
      } />
        <Route path="/service" Component={()=> <div>Service</div>} />
        <Route path="/about" Component={()=> <div>A propos</div>}/>
        <Route path="*" Component={()=> <div>not found</div>} />
      </Routes>
      </Content>
      <Footer/>
    </div>
  );
}


export default App;