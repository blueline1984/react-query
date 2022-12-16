import useAxios from "./useAxios";
import { useQuery } from "react-query";

export const useSuperHeroesData = (onSuccess, onError) => {
  const { instance } = useAxios();
  const fetchSuperHeroes = () => {
    return instance.get("/superheroes");
  };

  return useQuery(["super-heroes"], fetchSuperHeroes, {
    onSuccess,
    onError,
  });
};
