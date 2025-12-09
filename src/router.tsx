import { Layout } from "./components";
import { createBrowserRouter } from "react-router-dom";
import { Documentation, Galleries, Home, SupportUs } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // parent default route
        element: <Home />,
      },
      {
        path: "/galleries",
        element: <Galleries />,
      },
      {
        path: "/documentation",
        element: <Documentation />,
      },
      {
        path: "/supportus",
        element: <SupportUs />,
      },
    ],
  },
]);

export default router;
