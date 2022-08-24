import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    cacheTime: 300000, //default is 5 mins
    staleTime: 0, //staletime: the time that we don't want to RE-FETCH data (the default is 0)
    refetchOnMount: true, //default is true
    refetchOnWindowFocus: true, //if switch window, we RE-FETCH data (default is true)
    refetchInterval: false, //accepts a millisecond to Poll data in interval (default is false)
    refetchIntervalInBackground: false, //continues to RE-FETCH data even if not focused on the window (default is false)
    enabled: false, //fetching on mount (default is true)
    onSuccess,
    onError,
  });
};
