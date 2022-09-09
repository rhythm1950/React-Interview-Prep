import React from "react";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <button className="login-btn">Log In</button>
            </li>
          </ul>
        </nav>
        {/* <!-- Header content --> */}
        <div className="header-content">
          <h4>Try up to one month free</h4>
          <img src="img/logo.png" alt="Hulu" className="logo" />
          <div className="header-text-1">
            Watch thousands of TV shows and movies.
          </div>
          <div className="header-text-2">
            HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
          </div>
          <button className="btn btn-cta">Start Your Free Trial</button>
          <div className="legal-text">
            Free trial for new & eligible returning subscribers only.
          </div>
        </div>
      </header>
      <SubHeader></SubHeader>
    </>
  );
};

export default Header;
