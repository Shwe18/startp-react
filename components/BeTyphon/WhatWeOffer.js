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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <img src="/images/icon4.png" alt="image" />
                            </div>
                            <h3>
								<Link href="/feature-details">
									<a>Single Dashboard to manage all leads </a>
								</Link>
							</h3>

							<ul>
								* Leads All in One place<br />
								* Add or Remove leads easily<br />
								* Search leads by any column<br />
								* Manage leads distribution<br />
								<br />
								<br />
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
									<a>Call Recording & Advance Reports</a>
								</Link>
							</h3>

							<ul>
								* Real-time Reports<br />
								* Call history of dialouts<br />
								* Communication Reports<br />
								* Customized Report<br />
								* Call Recording <br />
								<br />
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
									<a>Integrations all Source for leads</a>
								</Link>
							</h3>

							<ul>
								* Auto Integration(Vendors, website,IVR)<br />  
                                * API capability to share or received data <br />
                                * Upload bulk data in excel sheet format		
							
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
									<a>Scalable with Pay Per Go</a>
								</Link>
							</h3>

							<ul>
								* Pay only for what you use ``Increase or reduce user as you need``
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