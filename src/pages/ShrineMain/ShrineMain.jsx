import "./ShrineMain.scss";
import shrine from "../../assets/images/torii.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ShrineMain() {
  return (
    <>
    <Header />
      <section className="landmark">
        <img className="landmark__image" src={shrine} alt="torii" />
        <div className="landmark__name">Reigandō</div>
        <div className="landmark__label">City</div>
        <div className="landmark__city">Kumamoto</div>
        <p className="landmark__description">
          "Reigando Cave, also known as Reigando (霊厳洞), is a historical
          landmark steeped in the legend of the famed swordsman Miyamoto
          Musashi. Nestled amidst tangerine orchards, this cave served as a
          retreat for Musashi during his later years. Here, he is believed to
          have penned his legendary book, The Book of Five Rings, a treatise on
          swordsmanship and strategy. Visitors can explore the serene cave
          surroundings and witness the hundreds of weathered stone statues
          (Gohyaku Rakan) representing the 500 disciples of Buddha who attained
          enlightenment. Pay homage at the enshrined statue of Kannon, the
          Bodhisattva of Compassion. Reigandō offers a glimpse into the life and
          legacy of Miyamoto Musashi, a figure who continues to inspire
          swordsmen and strategists alike. There's a great restaurant halfway up
          to the cave, try the curry!"
        </p>
        <div className="landmark__label">Enshrined Deities</div>
        <div className="landmark__deities">Kannon</div>
        <div className="landmark__label">Features</div>
        <p className="landmark__features">
          Retreat of the legendary swordsman Miyamoto Musashi, Location where
          he wrote The Book of Five Rings, Hundreds of weathered stone statues
          (Gohyaku Rakan), Statue of Kannon, the Bodhisattva of Compassion
        </p>
        <div className="landmark__label">Souvenirs</div>
        <div className="landmark__souvenirs">"Unknown"</div>
        <div className="landmark__reviews reviews">
        {/* <div className="landmark__label">Review</div> */}
        <div className="landmark__label">Rating</div>
          <p className="reviews__rating">5</p>
       
          <p className="reviews__comment">"Worth the hike, it provides solitude and gorgeous views. If you visit at the right time hundreds of golden dragonflies will lead the way."
          </p>
          <p className="reviews__reviewer">-Brian Station</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
