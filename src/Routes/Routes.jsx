import { createBrowserRouter } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Blog from "../Pages/Blogs/Blog";
import Contact from "../Pages/Contact/Contact";




export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : 
    [
        {
            index : true,
            path : '/',
            Component : Home
        },
        {
            path : '/booking',
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