import Schedule from "../components/Schedule";
import Programs from "../components/Programs";
import Trainers from "../components/Trainers";
import Promotions from "../components/Promotions";
import PricingPlan from "../components/PricingPlan";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Schedule />
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
                <h1 className="text-center">Commit To Be Fit</h1>
                <p>Made with love by Ankit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Programs />
      <Trainers />
      <Promotions />
      <PricingPlan />
      <Updates />
      <Footer />
    </div>
  );
}

export default Home;
