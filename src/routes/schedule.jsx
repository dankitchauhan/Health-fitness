import Schedule from "../components/Schedule";
import Programs from "../components/Programs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

function SchedulePage() {
  return (
    <div>
      <Header />
      <PageHeader heading="Schedule" />
      <Schedule />
      <Programs />
      <Footer />
    </div>
  );
}

export default SchedulePage;
