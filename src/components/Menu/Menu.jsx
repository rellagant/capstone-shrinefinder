import "./Menu.scss";
import { Link } from "react-router-dom";
import okayama from "../../assets/images/okayama.png";
import kumamoto from "../../assets/images/kumamoto.png";
import osaka from "../../assets/images/osaka.png";
import nara from "../../assets/images/nara.png";
import kyoto from "../../assets/images/kyoto.png";

export default function Menu() {
  const prefectures = [
    { id: "okayama", image: okayama, alt: "okayama prefecture" },
    { id: "osaka", image: osaka, alt: "osaka prefecture" },
    { id: "nara", image: nara, alt: "nara prefecture" },
    { id: "kumamoto", image: kumamoto, alt: "kumamoto prefecture" },
    { id: "kyoto", image: kyoto, alt: "kyoto" },
  ];
  return (
    <>
      <div className="menu">
        <h2 className="menu__title">Choose a Prefecture</h2>
        <div className="menu__map">
          {prefectures.map((prefecture) => (
            <Link key={prefecture.id} to={`/prefectures/${prefecture.id}`}>
              <img src={prefecture.image} alt={prefecture.alt} className="menu__image"/>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
