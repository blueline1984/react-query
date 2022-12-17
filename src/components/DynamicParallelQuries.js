import useAxios from "../hooks/useAxios";
import { useQueries } from "react-query";

const DynamicParallelQuries = ({ heroId }) => {
  const { instance } = useAxios();
  const fetchSuperHero = (heroId) => {
    return instance.get(`/superheroes/${heroId}`);
  };

  const queryResult = useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );

  console.log({ queryResult });
  return <div>DynamicParallelQuries</div>;
};

export default DynamicParallelQuries;
