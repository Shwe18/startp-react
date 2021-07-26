import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const WhatWeOffer = () => {
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
								<Link href="/feature-details">
									<a>Professional Image</a>
								</Link>
							</h3>

							<ul>
								* Professional company welcome message<br />
								* Multi Level IVR<br />
								* Call transfer as per language preference<br />
							    * Onhold Music<br />
								* Voicemail,Sticky<br />
								
								<br />
							</ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon5.png" alt="image" />
                            </div>
                            <h3>
								<Link href="/feature-details">
									<a>Super Advance Alert & Report</a>
								</Link>
							</h3>

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
								<Link href="/feature-details">
									<a>24/7 Customer Availability</a>
								</Link>
							</h3>

							<ul>
								* Always Connected<br />
							    * Multiple Call Connected on Single Number<br />
								* Intelligent Call Routing<br />
								* Office timing Setup
								<br />
                                <br />
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
								<Link href="/feature-details">
									<a>Simple Online Panel</a>
								</Link>
							</h3>

							<ul>
								* Easy Manageable<br />
								* Multi Agent login
								<br />
								<br />
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

export default WhatWeOffer;