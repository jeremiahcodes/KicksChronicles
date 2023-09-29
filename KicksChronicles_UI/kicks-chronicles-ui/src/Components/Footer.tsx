import React from "react";

 function Footer() {
   return (
    <footer className="footer py-5">
    <div className="container pt-lg-3 mt-xl-3">
      <div className="border-bottom text-center pb-4">
        <ul className="nav justify-content-center py-1 pb-sm-2">
          <li className="nav-item"><a className="nav-link py-2 px-3 mx-1" href="#">Space</a></li>
          <li className="nav-item"><a className="nav-link py-2 px-3 mx-1" href="#">Features</a></li>
          <li className="nav-item"><a className="nav-link py-2 px-3 mx-1" href="#">Reviews</a></li>
          <li className="nav-item"><a className="nav-link py-2 px-3 mx-1" href="#">Pricing</a></li>
          <li className="nav-item"><a className="nav-link py-2 px-3 mx-1" href="#">Contact</a></li>
        </ul>
      </div>
      <div className="d-sm-flex align-items-center justify-content-between pt-4 mt-2 mt-sm-0">
        <div className="d-flex justify-content-center order-sm-2 mb-4 mb-sm-0"><a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href="#"><i className="ai-instagram"></i></a><a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href="#"><i className="ai-facebook"></i></a><a className="btn btn-icon btn-sm btn-secondary btn-youtube rounded-circle" href="#"><i className="ai-youtube"></i></a></div>
        <p className="fs-sm order-sm-1 text-center mb-0"><span className="opacity-70">&copy; All rights reserved. Made by </span><a className="nav-link d-inline fw-normal p-0" href="https://createx.studio/" target="_blank" rel="noopener">JeremiahCodes</a></p>
      </div>
    </div>
  </footer>
   );
 }

 export default Footer;