import React from 'react'
import { Link } from "react-router-dom";
import "./App.css";

interface Props{}
const Navbar=(props: Props)=> {
  return (
    <section className='Navbar'>
      <div className='navBox'>
        <ul>
          <li className='items'>
            <Link to="/">Accueil</Link>
          </li>
          <li className='items'>
            <Link to="/service">Service</Link>
          </li>
          <li className='items'>
            <Link to="/about">A propos</Link>
          </li>
          <li className='items'>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
