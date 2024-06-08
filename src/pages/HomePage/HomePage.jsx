import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ShrineRoulette from "../../components/ShrineRoulette/ShrineRoulette";
import Menu from "../../components/Menu/Menu";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <ShrineRoulette />
      <Menu />
      <Footer />
    </div>
  );
}
