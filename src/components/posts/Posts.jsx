import React from 'react';
import './posts.css';
import Post from '../post/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    try {
      axios.get('http://localhost:8000/post')
      .then(res => {
        const data = res?.data?.data
        setPosts(data)
      })
      .catch(error => console.log(error))
    } catch (e) {
      console.log(e);
    }
  }, []);
  console.log('posts ', posts)
    return (
        <div className='posts'>
        {
          posts.length > 0 && posts.map((post, index) => <Post data={post} key={index} />)
        }
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
        </div>
    );
}

export default Posts;
