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
