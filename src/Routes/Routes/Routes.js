import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRputes";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://learning-course-server-one.vercel.app/catagories/${params.id}`)
            },
            {
                path: '/coursedetails/:id',
                element: <PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://learning-course-server-one.vercel.app/catagories/${params.id}`)
            },
            {
                path: '/FAQ',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ])
    },

])