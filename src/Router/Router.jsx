import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PostReview from "../Components/PostReview/PostReview";
import MyProfile from "../Components/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/postReview',
                element:<PostReview></PostReview>
            },
            {
                path:'/profile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            
        ]
    }
])

export default router;