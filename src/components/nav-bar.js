import React from "react";
import {Link} from 'react-router-dom';
function Navbar (){
    return(
<nav className="navbar">
<div className="container">
<a className="navbar-brand">
SHOP MANTRA
</a>
<div >
    <ul>
           
        <li className="nav-item"><a className="nav-link"><Link to="/">Home</Link></a></li>
        <li className="nav-item"><a className="nav-link"><Link to="/about">About</Link></a></li>
        <li className="nav-item"><a className="nav-link"><Link to="/contact">Contact</Link></a></li>
        <li className="nav-item"><a className="nav-link"><Link to="/register">Register</Link> </a></li>
        <li className="nav-item"><a className="nav-link"><Link to="/login">Login</Link> </a></li>
  
    </ul>
</div>


</div>
</nav>
    );
}
export default Navbar;