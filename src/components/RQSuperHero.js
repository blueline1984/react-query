import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

const RQSuperHero = () => {
  const { heroId } = useParams();

  const {
    isLoading,
    data: superHeroData,
    error,
    isError,
  } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>Super Hero Details</div>
      <div>
        {superHeroData?.data.name} - {superHeroData?.data.alterEgo}
      </div>
    </>
  );
};

export default RQSuperHero;
