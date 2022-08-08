import Programs from "../components/Programs";
import Trainers from "../components/Trainers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

function AboutPage() {
  return (
    <div>
      <Header />
      <PageHeader heading="About Us" />
      <div id="fh5co-team-section">
        <div class="container">
          <div class="row about">
            <div class="col-md-12 col-md-offset-0">
              <img
                class="img-responsive animate-box"
                src="images/home-image-3.jpg"
                alt="About"
              />
            </div>
            <div class="col-md-12 col-md-offset-0 animate-box">
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar. The Big Oxmox advised her
                not to do so, because there were thousands of bad Commas, wild
                Question Marks and devious Semikoli, but the Little Blind Text
                didn’t listen.
              </p>
              <blockquote>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>
              </blockquote>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar. The Big Oxmox advised her
                not to do so, because there were thousands of bad Commas, wild
                Question Marks and devious Semikoli, but the Little Blind Text
                didn’t listen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Trainers />
      <Programs />
      <Footer />
    </div>
  );
}

export default AboutPage;
