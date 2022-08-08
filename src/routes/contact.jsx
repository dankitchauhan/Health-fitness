import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

function ContactPage() {
  return (
    <div>
      <Header />
      <PageHeader heading="Contact Us" />
      <div id="fh5co-contact">
        <div class="container">
          <form action="#">
            <div class="row">
              <div class="col-md-6 animate-box">
                <h3 class="section-title">Our Address</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul class="contact-info">
                  <li>
                    <i class="icon-location-pin"></i>198 West 21th Street, Suite
                    721 New York NY 10016
                  </li>
                  <li>
                    <i class="icon-phone2"></i>+ 1235 2355 98
                  </li>
                  <li>
                    <i class="icon-mail"></i>
                    <a href="#">info@yoursite.com</a>
                  </li>
                  <li>
                    <i class="icon-globe2"></i>
                    <a href="#">www.yoursite.com</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 animate-box">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        name=""
                        class="form-control"
                        id=""
                        cols="30"
                        rows="7"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        class="btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div id="map" class="fh5co-map"></div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
