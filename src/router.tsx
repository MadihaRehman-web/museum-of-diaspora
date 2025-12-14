import { Layout } from "./components";
import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  Profile,
  Curator,
  SupportUs,
  Galleries,
  Subscription,
  SocialSignUp,
  Documentation,
  CreateNewPassword,
  ContentSubmission,
  FAQs,
} from "./pages";
import Users from "./pages/admin/users";
import Dashboard from "./pages/admin/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";
import ContentDetail from "./pages/admin/ContentDetail";
import AdminLayout from "./components/admin/AdminLayout";
import ChangeResetPassword from "./pages/ChangeResetPassword";

const router = createBrowserRouter([
  {
    path: "/", // GrandParent
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
        element: <ForgetPassword />,
      },
      {
        path: "/create-new-password",
        element: <CreateNewPassword />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/change/reset-password",
        element: <ChangeResetPassword />,
      },
      {
        path: "/curator",
        element: <Curator />,
      },
      {
        path: "/content",
        element: <ContentSubmission />,
      },
      {
        path: "/FAQs",
        element: <FAQs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "content-detail",
        element: <ContentDetail />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
    ],
  },
]);

export default router;
