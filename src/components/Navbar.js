import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (props) => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <Auth0Provider
      domain="dev-qoyl5nz27we5658f.us.auth0.com"
      clientId="puJknnX6eMTniB42mXUZkntKOME0grZp"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      	<nav class="navbar navbar-expand-sm navbar-light  sticky-top" data-bs-theme="light" >
      <div class="container">
      <a class="navbar-brand" href="#">
            <strong>DAILY NEWS</strong>
          </a>        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
           <li><Link className="nav-link active" aria-current="page" to="/">
                Home
                </Link>
              </li>
              <li>  <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li>  <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li>  <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li>  <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li><li>  <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li><li><Link className="nav-link active" aria-current="page" to="/technology">
                Technology
                </Link>
              </li>
              
              
            <li class="nav-item dropdown">
              <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User Profiling
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 <li><button type="button" class="btn btn-success" onClick={() => loginWithRedirect()} style={{margin:"10px"}}>Login</button></li>
                 <li><button type="button" class="btn btn-secondary" onClick={() => logout()} style={{margin:"10px"}}>Logout</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </Auth0Provider>
  );
};

export default Navbar;
