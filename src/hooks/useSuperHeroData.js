import { useQuery } from "react-query";
import useAxios from "./useAxios";

export const useSuperHeroData = (heroId) => {
  const { instance } = useAxios();
  const fetchSuperHero = ({ queryKey }) => {
    const heroId = queryKey[1];
    return instance.get(`/superheroes/${heroId}`);
  };

  return useQuery(["super-hero", heroId], fetchSuperHero);
};
