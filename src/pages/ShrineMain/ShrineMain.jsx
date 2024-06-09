import "./ShrineMain.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { ShrineFinderApi } from "../../utils/shrinesapi";
import { useParams, useLocation } from "react-router-dom";

const api = new ShrineFinderApi();

export default function ShrineMain() {
  const { shrineId } = useParams();
  const location = useLocation();

  const [shrine, setShrine] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchShrineData = async () => {
      try {
        const shrineData = await api.getShrineById(shrineId);
        const reviewData = await api.getReviewsByShrineId(shrineId);

        setShrine(shrineData);
        setReviews(reviewData);
      } catch (error) {
        console.error("Error fetching shrine data by id:", error);
      }
    };
    fetchShrineData();
  }, [shrineId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (shrine.length === 0) {
    return;
  }

  return (
    <>
      <Header />
      <section className="landmark">
        <img
          className="landmark__image"
          src={api.baseURL + shrine.image}
          alt="torii"
        />
        <div className="landmark__name">{shrine.name}</div>
        <div className="landmark__label">City</div>
        <div className="landmark__city">{shrine.city}</div>
        <p className="landmark__description">{shrine.description}</p>
        <div className="landmark__label">Enshrined Deities</div>
        <div className="landmark__deities">
          {shrine.deities.map((deity, i) => (
            <div className="landmark__deity" key={i}>
              {deity}
            </div>
          ))}
        </div>
        <div className="landmark__label">Features</div>
        <div className="landmark__features">
          {shrine.features.map((feature, i) => (
            <div className="landmark__feature" key={i}>
              {feature}
            </div>
          ))}
        </div>
        <div className="landmark__label">Souvenirs</div>
        <div className="landmark__souvenirs">
          {shrine.souvenirs_and_charms.map((souvenir, i) => (
            <div className="landmark__souvenir" key={i}>
              {souvenir}
            </div>
          ))}
        </div>
        <div className="landmark__reviews reviews">
          {reviews.map((review, i) => (
            <div className="landmark__review" key={i}>
              <div className="landmark__label">Rating</div>
              <p className="reviews__rating">{review.rating}</p>

              <p className="reviews__comment">{review.comment}</p>
              <p className="reviews__reviewer">{review.reviewer}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
