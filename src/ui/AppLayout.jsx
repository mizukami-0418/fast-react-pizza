import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader.jsx';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <header className="app-header">
        <Header />
      </header>
      <div className="my-10 overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
      <footer className="bg-yellow-400 px-4 py-3 sm:px-6">
        <p className="text-center">
          &copy; 2025 ポートフォリオピザショップ PIZZALU
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;
