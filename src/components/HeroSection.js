import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    //console.log("why don't poen??");
    return (
        <div className="hero-container">
            {/* <video src="/videos/video-2.mp4" autoPlay look muted /> */}
            <h1>Starbucks Coffee</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='betn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER<i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
