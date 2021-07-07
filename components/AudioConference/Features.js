import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Features = () => {
    return (
        <div className="solutions-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">What We Offer</span>
                    <h2>Our Featured Solutions</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                <a>Professional Image</a>
                                </Link>
                            </h3>
                            <ul>
                                <li> Welcome message </li>
								<li> Language preference</li>
								<li> Multi Level IVR</li>
								<li> Onhold Music</li>
								<li> Voicemail</li>
								<li> Sticky agent</li>
                                <br />
                                <br />
                                </ul>

                            <Link href="#">
                                <a className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                    <a>Super Advance Alert & Report</a>
                                </Link>
                            </h3>
                            <ul>
								<li> 2 way SMS Notification</li>
								<li> Email alerts</li>
								<li> Call Recording</li>
								<li> Call logs</li>
								<li> Real time analysis</li>
								<li> Number blacklisting</li>
                              
							</ul>
                            
                            <Link href="#">
                                <a className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                    <a>24/7 Customer Availability</a>
                                </Link>
                            </h3>
                            <ul>
								<li> Always Connected</li>
								<li> Intelligent Call Routing</li>
								<li> Multiple Call Connected at same time</li>
								<li> Office timing Setup</li>
                                <br />
								<br />
							</ul>
                            
                            <Link href="#">
                                <a className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon7.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                    <a><a>Simple Online Panel</a></a>
                                </Link>
                            </h3>
                            <ul>
								<li> Easy Manageable</li>
								<li> Multi Agent login</li>
								<br />
								<br />
								<br />
								<br />
								<br />
							</ul>
                            
                            <Link href="#">
                                <a className="learn-more-btn">
                                    <i data-feather="plus-circle"></i> Learn More
                                </a>
                            </Link>
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
            <div className="shape6 rotateme">
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

export default Features;