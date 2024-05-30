import About from "./about/About";
import BlogDetails from "./blogDetails/BlogDetails";
import Blogs from "./blogs/Blogs";
import Error from "./error/Error";
import Form from "./form/Form";
import Home from "./home/Home";
import Optimization from "./optimization/Optimization";
import Portfolio from "./portfolio/Portfolio";
import { Signup } from "./signup/Signup";

let id = 0;

export const AppRoutes = [
    {
        id: id++,
        path: '/',
        component: <Home />,
        navName: 'Home',
    },
    {
        id: id++,
        path: '/blogs',
        component: <Blogs />,
        navName: 'Blogs',
    },
    {
        id: id++,
        path: '/about',
        component: <About />,
        navName: 'About',
    },
    {
        id: id++,
        path: '/portfolio',
        component: <Portfolio />,
        navName: 'Portfolio',
    },
    {
        id: id++,
        path: '/blogs/:id',
        component: <BlogDetails />,
        navName: "null", // we dont display dis as an Nav directory, hence it will be used to skip the element
    },
    {
        id: id++,
        path: '/form',
        component: <Form />,
        navName: 'Form',
    },
    {
        id: id++,
        path: '/signup',
        component: <Signup />,
        navName: 'Signup',
    },
    {
        id: id++,
        path: '/optimization',
        component: <Optimization />,
        navName: 'Optimized',
    },
    {
        id: id++,
        path: '/*',
        component: <Error />,
        navName: "null",
    },
]