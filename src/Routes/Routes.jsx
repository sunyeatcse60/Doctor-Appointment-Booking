import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Blog from "../Pages/Blogs/Blog";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DoctorDetails from "../Pages/Doctor/DoctorDetails";




export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : 
    [
        {
            index : true,
            loader : () => fetch('doctorData.json'),
            errorElement : ErrorPage,
            path : '/',
            Component : Home
        },
        {
            path : '/details/:id',
            loader : () => fetch('doctorDetails.json'),
            Component: DoctorDetails

        },
        {
            path : '/booking',
             loader : () => fetch('doctorDetails.json'),
            Component: Booking
        },
        {
            path : '/blog',
            Component : Blog
        },
        {
            path : '/contact',
            Component : Contact
        }
    ]
  },
]);