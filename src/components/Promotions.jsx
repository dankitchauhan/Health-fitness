import React from "react";

const Promotions = () => {
  return (
    <div
      className="fh5co-parallax"
      style={{ backgroundImage: `url('images/home-image-2.jpg')` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 fh5co-table">
            <div className="fh5co-intro fh5co-table-cell box-area">
              <div className="animate-box">
                <h1>Fitness Classes this summer</h1>
                <p>Pay now and get 25% Discount</p>
                <a href="#" className="btn btn-primary">
                  Become A Member
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Promotions;
