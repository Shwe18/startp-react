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
								<li> Leads All in One place</li>
								<li> Add or Remove leads easily </li>
								<li> Search leads by any column </li>
								<li> Manage leads distribution</li>
								<br />
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
								<Link href="/feature-details">
									<a>Call Recording & Advance Reports</a>
								</Link>
							</h3>

							<ul>
								<li> Real-time Reports</li>
								<li> Call history of dialouts</li>
								<li> Communication Reports</li>
								<li> Customized Report</li>
								<li> Call Recording </li>
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
                                <img src="/images/icon6.png" alt="image" />
                            </div>
                            <h3>
								<Link href="/feature-details">
									<a>Integrations all Source for leads</a>
								</Link>
							</h3>

							<ul>
								<p> Auto Integration(Vendors, website,IVR)<br />  API capability to share or received data <br />Upload bulk data in excel sheet format</p>
							
							
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
								<Link href="/feature-details">
									<a>Scalable with Pay Per Go</a>
								</Link>
							</h3>

							<ul>
								<li> Pay only for what you use ``Increase or reduce user as you need``</li>
								
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

export default WhatWeOffer;