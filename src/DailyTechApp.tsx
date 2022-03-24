import { Layout } from './layout/Layout';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const DailyTechApp = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppRouter />
      </Layout>
    </Provider>
  );
};

export default DailyTechApp;
