import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCourseByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  console.log(email);
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;
  const { data: channel } = useQuery(
    ['courses', channelId],
    () => fetchCourseByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log({ channel, user });

  return <div>DependentQueriesPage</div>;
};
