import React from 'react';
import { Link ,Outlet } from 'react-router-dom';
const Navbar = () => {
    return (
     
            <><nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">  <h1><span style={{ color: "red" }}>Egy</span><span style={{ color: "blue" }}>best</span></h1></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Add">Add movie</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav><Outlet /></>
    );
};

export default Navbar;