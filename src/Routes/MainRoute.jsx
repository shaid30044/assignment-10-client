import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddProduct from "../Pages/AddProduct";
import AMD from "../Pages/AMD";
import UpdateProduct from "../Pages/UpdateProduct";

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
        path: "/AMD",
        element: <AMD />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/ASUS",
        element: <AddProduct />,
      },
      {
        path: "/Gigabyte",
        element: <AddProduct />,
      },
      {
        path: "/MSI",
        element: <AddProduct />,
      },
      {
        path: "/Intel",
        element: <AddProduct />,
      },
      {
        path: "/Nvidia",
        element: <AddProduct />,
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
