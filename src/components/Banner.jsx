import React from "react";

const Banner = () => {
  return (
    <div className="fh5co-hero">
      <div className="fh5co-overlay"></div>
      <div
        className="fh5co-cover"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: `url('images/home-image.jpg')` }}
      >
        <div className="desc animate-box">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2>
                  Fitness &amp; Health <br />
                  is a <b>Mentality</b>
                </h2>
                <p>
                  <span>
                    Created with <i className="icon-heart3"></i> by Ankit
                    Chauhan
                  </span>
                </p>
                <span>
                  <a className="btn btn-primary" href="#">
                    Start Your Journey
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
