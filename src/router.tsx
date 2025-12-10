import { Layout } from "./components";
import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  SupportUs,
  Galleries,
  SocialSignUp,
  Documentation,
} from "./pages";

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
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/social-signup",
        element: <SocialSignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forget-password",
        element: <Login />,
      },
      {
        path: "/create-new-password",
        element: <Login />,
      },
    ],
  },
]);

export default router;
