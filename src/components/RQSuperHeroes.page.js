import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log('Perform side effect after data fetching');
  };
  const onError = () => {
    console.log('Perform side effect after encountering error');
  };

  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      cacheTime: 300000, //default is 5 mins
      staleTime: 0, //staletime: the time that we don't want to RE-FETCH data (the default is 0)
      refetchOnMount: true, //default is true
      refetchOnWindowFocus: true, //if switch window, we RE-FETCH data (default is true)
      refetchInterval: false, //accepts a millisecond to Poll data in interval (default is false)
      refetchIntervalInBackground: false, //continues to RE-FETCH data even if not focused on the window (default is false)
      enabled: false, //fetching on mount (default is true)
      onSuccess,
      onError,
    }
  );

  console.log({ isFetching, isLoading });

  return (
    <div>
      <h2>React Query Super Heroes Page</h2>
      {isLoading ? (
        <h2>Loading ....</h2>
      ) : isError ? (
        <h2>{error.message}</h2>
      ) : (
        <div>
          <button onClick={refetch}>Fetch heroes</button>
          {data?.data.map((hero) => {
            return <li key={hero.name}>{hero.name}</li>;
          })}
        </div>
      )}
    </div>
  );
};
