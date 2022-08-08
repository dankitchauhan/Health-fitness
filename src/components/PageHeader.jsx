import React from "react";

const PageHeader = ({ heading }) => {
  return (
    <div
      className="fh5co-parallax"
      style={{ backgroundImage: `url('images/home-image-3.jpg')` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
            <div className="fh5co-intro fh5co-table-cell animate-box">
              <h1 className="text-center">{heading}</h1>
              <p>Made with love by Ankit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageHeader;
