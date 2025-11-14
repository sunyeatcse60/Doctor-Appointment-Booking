import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <nav className="text-xl">
        <NavLink to="/">
          <a className="m-4">Home</a>
        </NavLink>
        <NavLink to="/booking">
          <a className="m-4">Bookings</a>
        </NavLink>
        <NavLink to="/blog">
          <a className="m-4">Blogs</a>
        </NavLink>
        <NavLink to="/contact">
          <a className="m-4">Contacts</a>
        </NavLink>
      </nav>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="h-8 w-8 mr-2" src={logo} alt="MediBook Logo" />
            MediBook
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-lg text-white bg-blue-600 font-bold transition">
            Emergency
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
