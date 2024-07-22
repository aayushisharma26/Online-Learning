import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="extra-image-container">
                <img src="https://static.toiimg.com/thumb/msid-94473435,width-1280,height-720,resizemode-4/94473435.jpg" alt="extra" />
            </div>

            <div className="home-container">
                <div className="background-image">
                    <div className="overlay">
                        <h1 className="main-title">One Stop Event Planner</h1>
                        <h3 className="sub-title">Expert Event Planning</h3>
                        <p className="tagline">Every Event Should Be Perfect</p>
                        <p className="description">
                            We offer a comprehensive event planning service, ensuring every detail is perfect for your special occasion. From weddings to corporate events, we handle it all.
                        </p>
                        <div className="button-container">
                            <button className="about-button" type="button">ABOUT US</button>
                            <button className="get-started-button" type="button">GET EVENTS!</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-container">
                <div className="second-content">
                    <h1>About Our Company</h1>
                    <h2>Our Story</h2>
                    <p>
                        Complete Guide For Learning Parents.
                        Learning App for CBSE students and Test Generator for teachers to create question papers in minutes.
                    </p>
                    <h2>Mission and Vision</h2>
                    <p>
                        Our vision is to become a global leader in online education, creating a connected world where educational opportunities are limitless and personalized. We aim to foster continuous personal and professional development, contributing to a more knowledgeable and empowered global community.
                        <br />Call NO.9112356 78965 Email learner.com
                    </p>
                </div>
                <div className="about-us-image">
                    <img src="https://img.freepik.com/free-photo/woman-attending-online-class_23-2148854913.jpg" alt="event" />
                </div>
            </div>

            <div className="featured-container">
                <div className="featured-content">
                    <h2>See what we are best at</h2>
                    <p>
                        Use text and images to tell your company's story. Explain what makes your product or service extraordinary.
                    </p>
                    <button className="buy-now-button">See Our Gallery</button>
                </div>
            </div>
        </>
    );
};

export default Home;
