import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PostReview from "../Components/PostReview/PostReview";
import MyProfile from "../Components/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import MyReview from "../Components/MyReview/MyReview";
import EditReview from "../Components/EditReview/EditReview";
import MyFavorite from "../Components/MyFavorite/MyFavorite";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/postReview",
        element: (
          <PrivateRoute>
            <PostReview></PostReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/editReview/:id",
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/userReview/${params.id}`),
      },
      {
        path: "/myFavorite",
        element: (
          <PrivateRoute>
            <MyFavorite></MyFavorite>
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element:<ErrorPage></ErrorPage>
      }
    ],
  },
]);

export default router;
