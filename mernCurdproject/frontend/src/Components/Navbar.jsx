import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
    <a className="navbar-brand">Mern</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" >
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/all' className="nav-link" href="#">
                All post
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
