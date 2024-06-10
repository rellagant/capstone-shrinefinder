import Header from "../../components/Header/Header";
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
      <Header />
      <div className="shrines">
        <h1 className="shrines__header">
          Shrines and Power Spots in {prefecture}
        </h1>
        <div key={prefecture}>
          {shrines.map((shrine) => (
            <div key={shrine.id}>
              <h4>{shrine.name}</h4>
              <p>{shrine.city}</p>
              <Link key={shrine.id} to={`/shrine/${shrine.id}`}>
                <img
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
