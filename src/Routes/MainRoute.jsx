import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddProduct from "../Pages/AddProduct";
import AMD from "../Pages/AMD";
import UpdateProduct from "../Pages/UpdateProduct";
import Details from "../Pages/Details";
import Intel from "../Pages/Intel";
import Asus from "../Pages/Asus";
import Gigabyte from "../Pages/Gigabyte";
import Msi from "../Pages/Msi";
import Nvidia from "../Pages/Nvidia";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/update-product/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/product/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/AMD",
        element: <AMD />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product"
          ),
      },
      {
        path: "/ASUS",
        element: <Asus />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product"
          ),
      },
      {
        path: "/Gigabyte",
        element: <Gigabyte />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product"
          ),
      },
      {
        path: "/MSI",
        element: <Msi />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product"
          ),
      },
      {
        path: "/Intel",
        element: <Intel />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product"
          ),
      },
      {
        path: "/Nvidia",
        element: <Nvidia />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/product"
          ),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () =>
          fetch(
            "https://assignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/cart"
          ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
