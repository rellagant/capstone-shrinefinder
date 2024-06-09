import { ShrineFinderApi } from "./shrinesapi";
import { useState, useEffect } from "react";

const api = new ShrineFinderApi();

export const useRandomShrines = () => {
  const [randomShrine, setRandomShrine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomShrine = async () => {
      setLoading(true);
      try {
        const response = await api.getRandomShrine();
        console.log(response);
        setRandomShrine(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchRandomShrine();
  }, []);

  return { randomShrine, loading, error };
};

export const useShrineByPrefecture = (prefectureId) => {
  const [shrineData, setShrineData] = useState([]);
 

  useEffect(() => {
    const fetchShrines = async () => {
      try {
        const shrines = await api.getShrines();
        const uniquePrefectures = [...new Set(shrines.map((shrine) => shrine.prefecture))];

        const shrineByPrefecture = uniquePrefectures.map((prefecture) => {
          const shrinesInPrefecture = shrines.filter((shrine) => shrine.prefecture === prefectureId);
          return { prefecture, shrines: shrinesInPrefecture };
        });
        setShrineData(shrineByPrefecture);
      } catch (error) {
        console.error("Error fetching shrines for fun", error);
      }
    };

    fetchShrines();
  }, [prefectureId]);

  return shrineData;

}
 
// export default useRandomShrines;
