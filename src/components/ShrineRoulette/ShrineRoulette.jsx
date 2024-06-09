import "./ShrineRoulette.scss";
import { useRandomShrines } from "../../classes/hooks";

const ShrineRoulette = () => {
  const { randomShrine, loading, error } = useRandomShrines();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!randomShrine) {
    return <div>No random shrine found</div>;
  }

  return (
    <div className="shrine">
      <h2 className="shrine__header">Rise and Shrine</h2>
      <div className="shrine__wrapper">
        <div className="shrine__title">Name: {randomShrine.name}</div>
        <p className="shrine__city">City: {randomShrine.city}</p>
        <img src={randomShrine.image} alt="random" className="shrine__image"/>
      </div>
    </div>
  );
};

export default ShrineRoulette;
