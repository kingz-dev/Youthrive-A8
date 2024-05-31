import About from "./about/About";
import BlogDetails from "./blogDetails/BlogDetails";
import Blogs from "./blogs/Blogs";
import Error from "./error/Error";
import Form from "./form/Form";
import Home from "./home/Home";
import Optimization from "./optimization/Optimization";
import Portfolio from "./portfolio/Portfolio";
import { Signup } from "./signup/Signup";
import Signin from "./signin/Signin";
import Createblog from "./createBlog/Createblog";

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
        component: <About developer='Onyinanya Kingsley' />,
        navName: 'About',
    },
    {
        id: id++,
        path: '/portfolio',
        component: <Portfolio developer='Onyinanya Kingsley' />,
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
        navName: 'null',
    },
    {
        id: id++,
        path: '/signup',
        component: <Signup />,
        navName: 'Signup',
    },
    {
        id: id++,
        path: '/signin',
        component: <Signin />,
        navName: "null",
    },
    {
        id: id++,
        path: '/create',
        component: <Createblog />,
        navName: "null",
    },
    {
        id: id++,
        path: '/optimization',
        component: <Optimization />,
        navName: 'null',
    },
    {
        id: id++,
        path: '/*',
        component: <Error />,
        navName: "null",
    },
]