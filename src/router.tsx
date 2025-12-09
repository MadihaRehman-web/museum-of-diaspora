import { Layout } from "./components";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Documentation, Galleries, Home, SupportUs } from "./pages";

const router = createBrowserRouter([
  {
    path: "/", // GrandParent /
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/galleries",
        element: <Galleries />,
      },
      {
        path: "home/documentation",
        element: <Documentation />,
      },
      {
        path: "home/supportus",
        element: <SupportUs />,
      },
    ],
  },
]);

export default router;
