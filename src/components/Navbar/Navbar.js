import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div >
      <ul>
        <li><NavLink to="/popular" data-testid="popular" activeClassName="active">POPULAR</NavLink></li>
        <li><NavLink to="/trend" data-testid="trend" activeClassName="active">TREND</NavLink></li>
        <li><NavLink to="/newest" data-testid="newest" activeClassName="active">NEWEST</NavLink></li>
        <li><NavLink to="/toprated" data-testid="toprated" activeClassName="active">TOP RATED</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
