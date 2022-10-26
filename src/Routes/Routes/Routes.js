import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/courses',
        element: <Main></Main>,
        children: ([
            // {
            //     path: '/',
            //     element: <Courses></Courses>
            // },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            },
            {
                path: '/coursedetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            },

        ])
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