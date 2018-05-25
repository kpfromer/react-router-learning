import React from 'react';
import { NavLink } from 'react-router-dom';

// NavLink adds a .active class to the link when it is active
// this allows for styling
// activeStyle prop uses the object provided as active styling
// activeClassName adds the className to the tag, when active (replaces .active)

const Header = () => (
  <header>
    {/*<span className="icn-logo"><i className="material-icons">code</i></span>*/}
    <ul className="main-nav">
      {/* NOTE: exact is needed here as well for a similar reason to App.js */}
      {/* If it is not included it will all was have a .active class */}
      <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Home</NavLink></li>
      <li><NavLink to="/about" activeClassName="wowIamSoFit">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;