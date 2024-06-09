import "./Menu.scss";
import { Link } from "react-router-dom";
import okayama from "../../assets/images/okayama.png";
import kumamoto from "../../assets/images/kumamoto.png";
import osaka from "../../assets/images/osaka.png";
import nara from "../../assets/images/nara.png";
import kyoto from "../../assets/images/kyoto.png";
import { useState, useEffect } from "react";
import { ShrineFinderApi } from "../../utils/shrinesapi";

const api = new ShrineFinderApi();

export default function Menu() {
  const [prefectures, setPrefectures] = useState([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const prefecturesData = await api.getPrefectures();

        setPrefectures(prefecturesData);
      } catch (error) {
        console.error("Error fetching prefectures:", error);
      }
    };
    fetchPrefectures();
  }, []);

  const prefectureImages = {
    okayama,
    kumamoto,
    osaka,
    nara,
    kyoto,
  };

  return (
    <>
      <div className="menu">
        <h2 className="menu__title">Choose a Prefecture</h2>
        <div className="menu__map">
          {prefectures.map((prefecture) => (
            <Link key={prefecture} to={`shrines/${prefecture}`}>
              <img
                src={prefectureImages[prefecture.toLowerCase()]}
                alt={`${prefecture} prefecture`}
                className="menu__image"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
