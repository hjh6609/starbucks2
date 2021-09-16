import React from 'react'
import '../../App.css'
import Cars from '../Cars';
import Footer from '../Footer';
import HeroSection from '../HeroSection'

function Home() {
    return (
        <>
            <HeroSection />
            <Cars />
            <Footer />
        </>
    ) 
}

export default Home;