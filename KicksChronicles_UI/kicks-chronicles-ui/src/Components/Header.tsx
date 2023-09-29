import React from "react";

 function Header() {
   return (
    <header className="navbar navbar-expand-lg fixed-top bg-light">
    <div className="container"><a className="navbar-brand pe-sm-3" href="index.html"><span className="text-primary flex-shrink-0 me-2">
          </span>KicksChronicles</a>
      <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto" data-bs-toggle="mode">
        
      </div>
      <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
      <nav className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav navbar-nav-scroll me-auto" >
          <li className="nav-item dropdown"><a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">Landings</a>
            <div className="dropdown-menu overflow-hidden p-0">
              <div className="d-lg-flex">
                <div className="mega-dropdown-column pt-1 pt-lg-3 pb-lg-4">
                  <ul className="list-unstyled mb-0">
                    <li><a className="dropdown-item" href="index.html">Template Intro Page</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 rounded-3 rounded-start-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-mobile-app-showcase.html">Mobile App Showcase</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-product.html">Product Landing</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-saas-v1.html">SaaS v.1</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0"></span></li>
                    <li><a className="dropdown-item" href="landing-saas-v2.html">SaaS v.2</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-saas-v3.html">SaaS v.3<span className="text-danger fs-xs ms-2">New</span></a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0"></span></li>
                    <li><a className="dropdown-item" href="landing-shop.html">Shop Homepage</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-marketing-agency.html">Marketing Agency</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-creative-agency.html">Creative Agency</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0"></span></li>
                    <li><a className="dropdown-item" href="landing-conference.html">Conference (Event)<span className="text-danger fs-xs ms-2">New</span></a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0"></span></li>
                  </ul>
                </div>
                <div className="mega-dropdown-column pb-2 pt-lg-3 pb-lg-4">
                  <ul className="list-unstyled mb-0">
                    <li><a className="dropdown-item" href="landing-web-studio.html">Web Studio</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-corporate.html">Corporate</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-business-consulting.html">Business Consulting</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0"></span></li>
                    <li><a className="dropdown-item" href="landing-coworking-space.html">Coworking Space</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-yoga-studio.html">Yoga Studio</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-influencer.html">Influencer<span className="text-danger fs-xs ms-2">New</span></a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" ></span></li>
                    <li><a className="dropdown-item" href="landing-blog.html">Blog Homepage</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0"></span></li>
                  </ul>
                </div>
                <div className="mega-dropdown-column position-relative border-start zindex-3"></div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages</a>
            <ul className="dropdown-menu">
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="portfolio-list-v1.html">List View v.1</a></li>
                  <li><a className="dropdown-item" href="portfolio-list-v2.html">List View v.2</a></li>
                  <li><a className="dropdown-item" href="portfolio-grid-v1.html">Grid View v.1</a></li>
                  <li><a className="dropdown-item" href="portfolio-grid-v2.html">Grid View v.2</a></li>
                  <li><a className="dropdown-item" href="portfolio-slider.html">Slider View</a></li>
                  <li><a className="dropdown-item" href="portfolio-single-v1.html">Single Project v.1</a></li>
                  <li><a className="dropdown-item" href="portfolio-single-v2.html">Single Project v.2</a></li>
                </ul>
              </li>
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="shop-catalog.html">Catalog (Listing)</a></li>
                  <li><a className="dropdown-item" href="shop-single.html">Product Page</a></li>
                  <li><a className="dropdown-item" href="shop-checkout.html">Checkout</a></li>
                </ul>
              </li>
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="blog-grid-sidebar.html">Grid View with Sidebar</a></li>
                  <li><a className="dropdown-item" href="blog-grid.html">Grid View no Sidebar</a></li>
                  <li><a className="dropdown-item" href="blog-list-sidebar.html">List View with Sidebar</a></li>
                  <li><a className="dropdown-item" href="blog-list.html">List View no Sidebar</a></li>
                  <li><a className="dropdown-item" href="blog-single-v1.html">Single post v.1</a></li>
                  <li><a className="dropdown-item" href="blog-single-v2.html">Single post v.2</a></li>
                  <li><a className="dropdown-item" href="blog-single-v3.html">Single post v.3</a></li>
                </ul>
              </li>
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="about-agency.html">About - Agency</a></li>
                  <li><a className="dropdown-item" href="about-product.html">About - Product</a></li>
                </ul>
              </li>
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="services-v1.html">Services v.1</a></li>
                  <li><a className="dropdown-item" href="services-v2.html">Services v.2</a></li>
                  <li><a className="dropdown-item" href="services-v3.html">Services v.3</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="pricing.html">Pricing</a></li>
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Contacts</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="contacts-v1.html">Contacts v.1</a></li>
                  <li><a className="dropdown-item" href="contacts-v2.html">Contacts v.2</a></li>
                  <li><a className="dropdown-item" href="contacts-v3.html">Contacts v.3</a></li>
                </ul>
              </li>
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Specialty Pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="404-v1.html">404 Error v.1</a></li>
                  <li><a className="dropdown-item" href="404-v2.html">404 Error v.2</a></li>
                  <li><a className="dropdown-item" href="404-v3.html">404 Error v.3</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Account</a>
            <ul className="dropdown-menu">
              <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Auth pages</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="account-signin.html">Sign In</a></li>
                  <li><a className="dropdown-item" href="account-signup.html">Sign Up</a></li>
                  <li><a className="dropdown-item" href="account-signinup.html">Sign In / Up</a></li>
                  <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="account-overview.html">Overview</a></li>
              <li><a className="dropdown-item" href="account-settings.html">Settings</a></li>
              <li><a className="dropdown-item" href="account-billing.html">Billing</a></li>
              <li><a className="dropdown-item" href="account-orders.html">Orders</a></li>
              <li><a className="dropdown-item" href="account-earnings.html">Earnings</a></li>
              <li><a className="dropdown-item" href="account-chat.html">Chat (Messages)</a></li>
              <li><a className="dropdown-item" href="account-favorites.html">Favorites (Wishlist)</a></li>
            </ul>
          </li>
          <li className="nav-item"><a className="nav-link" href="components/typography.html">UI Kit</a></li>
          <li className="nav-item"><a className="nav-link" href="docs/getting-started.html">Docs</a></li>
        </ul>
        <div className="d-sm-none p-3 mt-n3"><a className="btn btn-primary w-100  mb-1" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener"><i className="ai-cart fs-xl me-2 ms-n1"></i>Buy now</a></div>
      </nav>
    </div>
  </header>
   );
 }

 export default Header;