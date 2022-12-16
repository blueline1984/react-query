import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };

  const {
    isLoading,
    data: superHeroesData,
    isError,
    error,
    isFetching,
    refetch,
  } = useSuperHeroesData(onSuccess, onError);

  console.log("superHeroesData", superHeroesData);

  if (isLoading || isFetching) {
    return <h2>Loading Skeleton...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {superHeroesData?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      {/* {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
    </>
  );
};

export default RQSuperHeroesPage;
