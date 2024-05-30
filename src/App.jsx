import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Error from "./components/error/Error";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blogs/Blogs";
import BlogDetails from "./components/blogDetails/BlogDetails";
import { AppRoutes } from './components/routesData';

function App() {
  let Path = useLocation();
  let noNav = ['/blogs', '/blogDetails'];
  

  return (
    <>
      <div>
      { !noNav.includes(Path.pathname) && <Nav />}
      {/* <Nav /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About developer='Onyinanya Kingsley' />} />
          <Route path="/portfolio" element={<Portfolio developer='Onyinanya Kingsley' />} />
          <Route path="*" element={<Error />} /> */}
          {
            AppRoutes.map(route => {
              return <Route key={route.id} path={route.path} element={route.component} />
            })
          }
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
