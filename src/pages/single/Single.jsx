import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './single.css';

export default function single() {
    return (
        <div className="single">
            {/* post */}
            <SinglePost />
            <Sidebar />
        </div>
    )
}
