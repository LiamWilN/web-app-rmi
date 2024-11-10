import React from "react";
import Overview from "./pages/overview";
import Login from "./pages/login";
import Messages from "./pages/messages";
import Applicants from "./pages/applicants";
import Jobs from "./pages/jobs";
import Settings from "./pages/settings";
import NotFound from "./pages/notfound";
import MainLayout from "./layout/mainlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
    index: true,
  },
  {
    path: "/recruitment",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/recruitment/overview",
        element: <Overview />,
      },
      {
        path: "/recruitment/jobs",
        element: <Jobs />,
      },
      {
        path: "/recruitment/applicants",
        element: <Applicants />,
      },
      {
        path: "/recruitment/messages",
        element: <Messages />,
      },
      {
        path: "/recruitment/settings",
        element: <Settings />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
