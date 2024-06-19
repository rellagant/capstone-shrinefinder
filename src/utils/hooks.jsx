import { ShrineFinderApi } from "./shrinesapi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const api = new ShrineFinderApi();

export const useRandomShrines = () => {
  const [randomShrine, setRandomShrine] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
  console.log(randomShrine);

  const handleGetLucky = async () => {
    setLoading(true);
    try {
      const response = await api.getRandomShrine();
      const randomShrine = response;

      if (!randomShrine || !randomShrine.id) {
        setError("No shrine was found today");
        setLoading(false);
        return;
      }

      setRandomShrine(randomShrine);
      navigate(`/shrine/${randomShrine.id}`);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    randomShrine,
    loading,
    error,
    fetchRandomShrine,
    handleGetLucky,
  };
};
