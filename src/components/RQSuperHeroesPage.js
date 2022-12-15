import React from "react";
import { useQuery } from "react-query";
import useAxios from "../hooks/useAxios";

const RQSuperHeroesPage = () => {
  const { instance } = useAxios();
  const fetchSuperHeroes = () => {
    return instance.get("/superheroes");
  };

  const {
    isLoading,
    data: superHeroesData,
    isError,
    error,
  } = useQuery(["super-heroes"], fetchSuperHeroes);

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <h2>RQSuperHeroesPage</h2>
      {superHeroesData?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
