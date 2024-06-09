import Header from "../../components/Header/Header";
import "./Prefectures.scss";
import Footer from "../../components/Footer/Footer";
import { useEffect} from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useShrineByPrefecture } from "../../utils/hooks";
// import ShrineMain from "../../components/ShrineMain/ShrineMain";

// const api = new ShrineFinderApi();

export default function Prefectures() {
  const { id } = useParams(); // Get the prefecture from the URL
  const location = useLocation();
  const shrineData = useShrineByPrefecture(id);
  // console.log(shrineData);
  // const [shrineData, setShrineData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // useEffect(() => {
  //   const fetchShrinesByPrefecture = async () => {
  //     setLoading(true);
  //     try {
  //       const shrinesData = await api.getShrinesByPrefecture();
  //       setShrineData(shrinesData);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       setError(error);
  //     }
  //   };

  //   fetchShrinesByPrefecture();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // const shrines = shrineData[prefecture] || [];
  // console.log(id);
  // console.log(shrineData);
  // const shrine = shrineData.find((prefecture) => prefecture === id)
  // console.log(shrine);
  return (
    <>
      <Header />
      {/* <ShrineMain /> */}
      <div className="shrines">
        <h1 className="shrines__header">Shrines and Power Spots in {id}</h1>
        <div> 
          {shrineData
            .filter((prefecture) => prefecture.prefecture === id) // Filter by the current prefecture
            .map((prefecture) => (
              
              <div key={prefecture.prefecture}>
                {prefecture.shrines.map((shrine) => (
              
                  <div key={shrine.id}>
                    <h4>{shrine.name}</h4>
                    <p>{shrine.city}</p>
                    <Link key={shrine.id} to={`/shrine/${shrine.id}`}>
                    <img src={shrine.image} alt={`${shrine.name} shrine`} />
                    </Link>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      {/* <div className="shrines">
        <h1 className="shrines__header">Shrines and Power Spots in {id}</h1>
        <h2>{id.name}</h2>

        <div> */}
      {/* {shrineData.find((prefecture) => {
            (prefecture === id)
            .map((shrine) => {
              return (
                <div key={shrine.id}>
                  <h4>{shrine.name}</h4>
                  <p>{shrine.city}</p>
                  <img src={shrine.image} alt={`${shrine.name} shrine`} />
                </div>
              );
            });
          })} */}
      {/* </div>
      </div> */}
      <Footer />
    </>
  );
}
