import Home from "../src/pages/Home";
import { Layout } from "./components";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // parent default route
        element: <Home />,
      },
    ],
  },
]);

export default router;
