import { useQuery } from "react-query";
import useAxios from "../hooks/useAxios";

const ParallelQueriesPage = () => {
  const { instance } = useAxios();

  const fetchSuperHeroes = () => {
    return instance.get(`/superheroes`);
  };

  const fetchFriends = () => {
    return instance.get(`/friends`);
  };

  useQuery(["super-heroes"], fetchSuperHeroes);
  useQuery(["friends"], fetchFriends);

  return <div>paralleQueries Page</div>;
};

export default ParallelQueriesPage;
