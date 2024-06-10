import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ShrineRoulette from "../../components/ShrineRoulette/ShrineRoulette";
import Menu from "../../components/Menu/Menu";
import CoverPage from '../../components/Cover/Cover'

export default function HomePage() {
  return (
    <div className="home-page">
      <CoverPage />
      <Header />
      <ShrineRoulette />
      <Menu />
      <Footer />
    </div>
  );
}
