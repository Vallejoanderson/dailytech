import { AddEvent } from '../events/AddEvent';
import { FeedList } from './FeedList';

export const Home = () => {
  return (
    <div>
      <AddEvent />
      <FeedList />
    </div>
  );
};
