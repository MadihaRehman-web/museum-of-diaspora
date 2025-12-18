import { Layout } from "./components";
import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  FAQs,
  Home,
  Login,
  Users,
  SignUp,
  Profile,
  Curator,
  SupportUs,
  EditUsers,
  Galleries,
  Dashboard,
  ContentInfo,
  AdminLayout,
  Subscription,
  ContentOwner,
  SocialSignUp,
  Documentation,
  ContentDetail,
  CuratorDetails,
  ForgetPassword,
  EditSubscription,
  ContentSubmitter,
  CreateNewPassword,
  ContentDetailAdmin,
  ChangeResetPassword,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "galleries",
        element: <Galleries />,
      },
      {
        path: "/galleries/content-detail",
        element: <ContentDetail />,
      },
      {
        path: "documentation",
        element: <Documentation />,
      },
      {
        path: "supportus",
        element: <SupportUs />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "social-signup",
        element: <SocialSignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "create-new-password",
        element: <CreateNewPassword />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "change/reset-password",
        element: <ChangeResetPassword />,
      },
      {
        path: "curator",
        element: <Curator />,
      },
      {
        path: "curator-details",
        element: <CuratorDetails />,
      },
      {
        path: "content-submitter",
        element: <ContentSubmitter />,
      },
      {
        path: "content-owner",
        element: <ContentOwner />,
      },
      {
        path: "content-information",
        element: <ContentInfo />,
      },
      {
        path: "FAQs",
        element: <FAQs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "content-detail-admin",
        element: <ContentDetailAdmin />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "edit-user",
        element: <EditUsers />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "edit-subscription",
        element: <EditSubscription />,
      },
    ],
  },
]);

export default router;
