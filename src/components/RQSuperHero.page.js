import { useSuperHeroData } from '../hooks/useSuperHero';
import { useParams } from 'react-router-dom';

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { data, isLoading } = useSuperHeroData(heroId);

  return (
    <div>
      {isLoading ? (
        <h1>Loading Hero ...</h1>
      ) : (
        <p>Hero Name: {data.data.name}</p>
      )}
    </div>
  );
};
