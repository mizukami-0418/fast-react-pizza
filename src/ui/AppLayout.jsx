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
      {/* <footer className="app-footer">
        <p>&copy; 2023 Fast React Pizza</p>
      </footer> */}
    </div>
  );
}

export default AppLayout;
