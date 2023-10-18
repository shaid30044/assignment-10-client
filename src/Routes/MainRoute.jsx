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
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/product/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/AMD",
        element: <AMD />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/ASUS",
        element: <Asus />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/Gigabyte",
        element: <Gigabyte />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/MSI",
        element: <Msi />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/Intel",
        element: <Intel />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/Nvidia",
        element: <Nvidia />,
        loader: () => fetch("http://localhost:5000/product"),
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
