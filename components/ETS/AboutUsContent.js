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
                            <h2>Employee Tracking Solution</h2>
                            <div className="bar"></div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <Link href="/about-1">
                                            <a className="btn btn-danger">LOGIN</a>
                                        </Link> 
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                        <Link href="/about-1">
                                            <a className="btn btn-danger">FREE TRIAL</a>
                                        </Link>
                                    </div>
                            </div>
                           <p><strong><Link href=""><a>Employee Tracking Solution </a></Link></strong> helps to manage your employee by real-time tracking on day activities like attendance, <strong>calls recording,</strong> day visits, GPS Location, Talk-time, Prospect contacted and much more. It provides actionable data driven insights who helps to improve and execute the team in your tele calling and field operations. Its effective <strong>Call Recoding Solution</strong> on mobile.</p>
                           <p><strong>Employee Tracking Solution</strong> is a SAAS (Software as a service) you only need to pay only charges against what you use. It’s a very simple mobile application which connected to Web App. for tracking and reporting at a glance. Manager can assign, schedule and reschedule the tasks as per employees.</p>
                            
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