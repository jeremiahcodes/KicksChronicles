import React from "react";
import { NavLink } from "react-router-dom";

 function Header() {
   return (
    <header className="navbar navbar-expand-lg fixed-top bg-light">
    <div className="container"><NavLink className="navbar-brand pe-sm-3" to="/"><span className="text-primary flex-shrink-0 me-2">
          </span>KicksChronicles</NavLink>
      <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto" data-bs-toggle="mode">
        
      </div>
      <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
      <nav className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav navbar-nav-scroll me-auto" >
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/Shoes">All Shoes</NavLink></li>
        </ul>
        <div className="d-sm-none p-3 mt-n3"><a className="btn btn-primary w-100  mb-1" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener"><i className="ai-cart fs-xl me-2 ms-n1"></i>Buy now</a></div>
      </nav>
    </div>
  </header>
   );
 }

 export default Header;