import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiFillShopping } from 'react-icons/ai';
import { useAuth } from '../../context/Auth';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth, setAuth] = useAuth();

  // Handle Logout
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    setTimeout(() => {
      toast.success('Logout Successfully');
    }, 1000);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <AiFillShopping /> Ecommerce App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categary" className="nav-link">
                  Category
                </NavLink>
              </li>
              {!auth.user? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                      <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : 'user'}`} className="dropdown-item">
  Dashboard
</NavLink>

                      </li>
                   <li className='dropdown-item'>
                   <NavLink onClick={handleLogout} to="/login" className="nav-link">
                      Logout
                    </NavLink>
                   </li>
             
                    </ul>
                  </li>
             
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
