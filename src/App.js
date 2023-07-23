import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Error from "./Components/Error";
import ProductItem from "./Components/ProductItem";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./Components/CartPage";

function App() {
  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <div className="fixed w-full z-10">
          <Navbar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Body />
            <Products />
          </div>
        )
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/products/:id",
        element: <ProductItem />
      }
    ]
  }
]);

export default App;
