import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ShrineRoulette from "../../components/ShrineRoulette/ShrineRoulette";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <ShrineRoulette />
      <Footer />
    </div>
  );
}
