import "./Prefectures.scss";
import Footer from "../../components/Footer/Footer";
import { ShrineFinderApi } from "../../utils/shrinesapi";
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const api = new ShrineFinderApi();

export default function Prefectures() {
  const { prefecture } = useParams();
  const location = useLocation();
  const [shrines, setShrines] = useState([]);

  useEffect(() => {
    const fetchShrines = async () => {
      try {
        const shrinesData = await api.getShrinesByPrefecture(prefecture);
        setShrines(shrinesData);
      } catch (error) {
        console.error("Error fetching shrines by prefecture:", error);
      }
    };
    fetchShrines();
  }, [prefecture]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="shrines">
        <h3 className="shrines__header">
          Shrines and Power Spots in {prefecture}
        </h3>
        
        <div className ="shrines__wrapper"
        key={prefecture}>
          {shrines.map((shrine) => (
            <div key={shrine.id} className="shrines__item">
              <h2 className="shrines__title">{shrine.name}</h2>
              <p className="shrines__city">{shrine.city}</p>
              <Link key={shrine.id} to={`/shrine/${shrine.id}`}>
                <img className="shrines__image"
                  src={api.baseURL + shrine.image}
                  alt={`${shrine.name} shrine`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
