import { createBrowserRouter } from "react-router";

import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Main from "../Pages/Main";
import Login from "../Components/LoginAndRegister/Login";
import Register from "../Components/LoginAndRegister/Register";
import AddArtifact from "../Pages/AddArtifact";
import PrivateRoute from "../Provider/PrivateRoute";
import AllArtifacts from "../Pages/AllArtifacts";

import Details from "../Pages/Details";
import MyArtifacts from "../Pages/MyArtifacts";
import Update from "../Pages/Update";
import LikedArtifacts from "../Pages/LikedArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    ErrorBoundary: Error,
    Component: Home,
    children: [
      {
        index: true,
        path: "/",
        Component: Main,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/add-artifacts",
        element: (
          <PrivateRoute>
            <AddArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-artifacts",
        Component: AllArtifacts,
      },

      {
        path: "/artifact/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/udpate-artifact/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
