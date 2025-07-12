import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import Order from "./features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";

// ルーターの設定
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // メニューのデータをロードするためのローダーを指定
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ], // AppLayoutをルート要素として設定
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
