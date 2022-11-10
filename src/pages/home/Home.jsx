import React from 'react';
import Header from '../../components/header/Header';
import Post from '../../components//posts/Posts';
import Sidebar from '../../components//sidebar/Sidebar';
import "./home.css";

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <Post />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
