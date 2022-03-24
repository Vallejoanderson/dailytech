import { Layout } from './layout/Layout';
import { AppRouter } from './routers/AppRouter';

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;
