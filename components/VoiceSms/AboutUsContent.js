import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <div className="about-area pt-0 ptb-80">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="ml-about-img">
                            <img src="/images/about4.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        
                        <div className="ml-about-content">
                            <span className="sub-title">About Us</span>
                            <h2>Reach your customer thru Voice SMS</h2>
                            <div className="bar"></div>
                            <p>Voice SMS are pre-recorded voice messages to a mobile or landline networks across the country. You can send that includes a message (usually 60 seconds or less) that the other person can hear on the call. Its completely automated process hence no operators or dialer require to prcess the calls. This facility allows businesses to enter their potential market by reaching target audience. Grow your business with cost effective service and user-friendly interface</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    );
}

export default AboutUsContent;