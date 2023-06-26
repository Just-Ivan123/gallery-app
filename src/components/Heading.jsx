import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <ul className="nav nav-pills">
            <>
              <li>
                <Link to="/register" className="nav-link" aria-current="page">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link" aria-current="page">
                  Sign In
                </Link>
              </li>
            </>
        </ul>
      </header>
    </div>
  );
};

export default Heading;