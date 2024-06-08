import './ShrineRoulette.scss'
import useRandomShrines from '../../classes/hooks';

const ShrineRoulette = () => {
    const { randomShrines, loading, error } = useRandomShrines();
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        {randomShrines && (
          <div>
            <h2>Random Shrine</h2>
            <img src={randomShrines.image} alt="special"/>
            <p>{randomShrines.name}</p>

           
          </div>
        )}
      </div>
    );
  };
  
  export default ShrineRoulette;

