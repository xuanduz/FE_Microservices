import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = (props) => {
  const {data} = props
  console.log('data', data)
    return (
        <div className='post'>
            <Link className="link" to={`${'/post/' + data && data.user_id}`}><img className='post__Img' src={data && data.images || "https://www.patterns.dev/img/reactjs/react-logo@3x.svg"} alt="" /></Link>
            <div className="post__Infor">
                <div className="post__Infor--Cats">
                    <span className="post__Infor--Cat">
                        Algorithms
                    </span>
                    <span className="post__Infor--Cat">
                        Language Programing
                    </span>
                </div>
                <Link className="link" to="/post/:postId">
                    <span className="post__Infor--Title">
                        {data && data.title}
                    </span>
                </Link>

                <hr />

                <span className="post__Infor--Date">
                    {data && data.last_update}
                </span>

                <p className="post__Infor--Des">
                    {data && data.content}
                </p>
            </div>
        </div>

    );
}

export default Post;
