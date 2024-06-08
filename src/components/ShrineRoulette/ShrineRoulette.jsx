import "./ShrineRoulette.scss";
import useRandomShrines from "../../classes/hooks";

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
    <div>
      <h2>Random Shrine</h2>
      <div>
        <h3>{randomShrine.name}</h3>
        <p>City: {randomShrine.city}</p>
        <img src={randomShrine.image} alt="random" />
      </div>
    </div>
  );
};

export default ShrineRoulette;
