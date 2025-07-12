import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <header className="app-header">
        <Header />
      </header>
      <main className="app-content">
        <Outlet />
      </main>
      <CartOverview />
      <footer className="app-footer">
        <p>&copy; 2023 Fast React Pizza</p>
      </footer>
    </div>
  );
}

export default AppLayout;
