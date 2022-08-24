import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

export const ParallelQueriesPage = () => {
  const { data: heroesData, isLoading: isLoadingHeroes } = useQuery(
    'super-heroes',
    fetchSuperHeroes
  );
  const { data: friendsData, isLoading: isLoadingFriends } = useQuery(
    'friends',
    fetchFriends
  );

  return <div>Hello</div>;
};
