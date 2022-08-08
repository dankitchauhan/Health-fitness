import Programs from "../components/Programs";
import Trainers from "../components/Trainers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

function TrainersPage() {
  return (
    <div>
      <Header />
      <PageHeader heading="Trainers" />
      <Trainers />
      <Programs />
      <Footer />
    </div>
  );
}

export default TrainersPage;
