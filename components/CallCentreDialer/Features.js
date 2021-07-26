
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
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                <a>Professional Calls Solution with Scalability</a>
                                </Link>
                            </h3>
                            <ul>
                                * Professional Company welcome message, <br />
								* Multi Level IVR<br />
								* Call transfer as per language preference,<br />
								* Onhold Music, Voicemail, Sticky<br />
                            </ul>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon5.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                    <a>Effective Calls Management</a>
                                </Link>
                            </h3>
                            <br />
                            <ul>
                                * Call Recording<br />
							    * Call logs<br />
								* 2 way SMS Notification<br />
								* Email alerts, Caller Number blocking,<br />
								* Real time analysis<br />
								<br />
                              
							</ul>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                    <a>Tracking and Monitoring</a>
                                </Link>
                            </h3>
                            <br />
                            <ul>
                                * Always Connected<br />
								* Intelligent Call Routing<br />
								* Multiple Call Connected at same time<br />
								* Office timing Setup<br />
								<br />
								<br />
							
							</ul>
                            
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon7.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="#">
                                    <a>Reports and Analysis</a>
                                </Link>
                            </h3>
                            <br />
                            <ul>
						     	* Easy Manageable<br />
								* Multi Agent login<br />
								<br />
								<br />
								<br />
								<br />
                                <br />
								
							</ul>
                            
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