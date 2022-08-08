import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="fh5co-header">
      <header id="fh5co-header-section">
        <div className="container">
          <div className="nav-header">
            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle">
              <i></i>
            </a>
            <h1 id="fh5co-logo">
              <Link to="/">
                Fit<span>ness</span>
              </Link>
              {/* <a href="index.html">Fit<span>ness</span></a> */}
            </h1>
            <nav id="fh5co-menu-wrap" role="navigation">
              <ul className="sf-menu" id="fh5co-primary-menu">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                {/* <li>
                <a href="classes.html" className="fh5co-sub-ddown">Classes</a>
                <ul className="fh5co-sub-menu">
                  <li><a href="left-sidebar.html">Web Development</a></li>
                  <li>
                    <a href="right-sidebar.html"X
                      >Branding &amp; Identity</a>
                  </li>
                  <li>
                    <a href="#" className="fh5co-sub-ddown">Free HTML5</a>
                    <ul className="fh5co-sub-menu">
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=build-free-html5-bootstrap-template"
                          target="_blank"
                          >Build</a>
                      </li>
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=work-free-html5-template-bootstrap"
                          target="_blank"
                          >Work</a>
                      </li>
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=light-free-html5-template-bootstrap"
                          target="_blank"
                          >Light</a>
                      </li>
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=relic-free-html5-template-using-bootstrap"
                          target="_blank"
                          >Relic</a>
                      </li>
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=display-free-html5-template-using-bootstrap"
                          target="_blank"
                          >Display</a>
                      </li>
                      <li>
                        <a
                          href="http://freehtml5.co/preview/?item=sprint-free-html5-template-bootstrap"
                          target="_blank"
                          >Sprint</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">UI Animation</a></li>
                  <li><a href="#">Copywriting</a></li>
                  <li><a href="#">Photography</a></li>
                </ul>
              </li> */}
                <li>
                  <Link to="/schedule">Schedule</Link>
                </li>
                <li>
                  <Link to="/trainers">Trainers</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
