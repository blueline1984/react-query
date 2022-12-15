import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { instance } = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get("/superheroes");
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>HomePage</h2>
      {data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};

export default SuperHeroesPage;
