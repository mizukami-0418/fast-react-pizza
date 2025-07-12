import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="app-layout">
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
