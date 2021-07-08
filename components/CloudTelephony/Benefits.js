import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Benefits = () => {
    return (
        <div className="solutions-area ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <span className="sub-title">What We Offer</span>
                    <h2>Benefits</h2>
                    <div className="bar"></div>
                   
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>One Number for Callers</a>
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Call attending at 1st ring</a>
                                </Link>
                            </h3>
                        </div>
                    </div>


                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Distribute Same information to each caller</a>
                                </Link>
                            </h3>
                        </div>
                    </div>


                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Increase your brand image for callers</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>No Hardware cost</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Never loss business leads</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Pay-as-you-grow model</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-landscape"></i>
                                <img src="/images/agency-image/agency-icon-bg.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Scale without adding manpower</a>
                                </Link>
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="shape9 slow mobile-dnone">
                <img 
                    src="/images/agency-image/agency-shape1.png" 
                    className="animate__animated animate__fadeInLeft animate__delay-0.7s" 
                    alt="image" 
                />
            </div>
        </div>
    );
}

export default Benefits;