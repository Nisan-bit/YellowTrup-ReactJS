import React from 'react'
import NavBar from './NavBar';
import Carousel from './Carousel';
import Products from './Products';
import Trending from './Trending';
import Footer from './Footer';


function Home() {
    return (
        <>
            <NavBar />
            <Carousel />
            <Products />
            <Trending />
            <Footer />

        </>
    )
}

export default Home
