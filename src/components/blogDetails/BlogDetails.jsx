import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import './blogDetails.scss'

const BlogDetails = () => {
    const {id} = useParams();
    const redir = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setBlog(res.data);
      })
      .catch(err => {
        console.log('Oop! error fetching the blogs', err);
      });
    },[id]);

    if (!blog) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <div id='blogDetails'>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        {/* <div className='btn'>
            <button onClick={() => redir('/blogs')}>Back to Blogs</button>
        </div> */}
        <Link to="/blogs" className="back-link">
        <FaArrowLeft />
        </Link>
      </div>
    </div>
  )
}

export default BlogDetails