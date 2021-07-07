import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="iot-main-banner">
            <div className="container">
                <div className="iot-banner-content">
                    <span><strong>Missed Call Number for your Business</strong></span>
                    <p>Your customer can placed a missed call to your given number at zero cost and receive a call back immediately. Missed Call Service is easiest way to give your customer updates, Lead Generation, Free Callback to caller, Customer Engagement, Customer Support, Customer Feedback, Application Download, Opinion Poll, OTP/Mobile Number Verification.</p>
                    <h2>We get it! IoT growth is happening</h2>
                    <p>At this point, it may seem like overkill to point out the continued growth bound to happen in the Internet of Things space for the years to come and how it will create new opportunities for companies, both established and new, from a hardware and software perspective.</p>
                    
                    <Link href="/contact">
                        <a className="btn btn-primary">Get Started</a>
                    </Link>
                </div>

                <div className="iot-banner-image">
                    <img 
                        src='/images/iot-banner-image/iot-main-img1.png'
                        className="animate__animated animate__fadeInUp animate__delay-0.8s" 
                        alt="image"
                    />
                
                    <img 
                        src='/images/iot-banner-image/iot-shape1.png'
                        className="animate__animated animate__zoomIn" 
                        alt="image"
                    />
                </div>

                <div className="animate-border">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
