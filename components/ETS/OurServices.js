import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <div className="ml-services-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Solutions</span>
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>All Calls Recording</a>
                                </Link>
                            </h3>
                            <p>Record your all incoming & Outgoing Calls from anywhere</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Live Location Tracking</a>
                                </Link>
                            </h3>
                            <p>Track your employee real-time and his day route</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Field Visit Schedules</a>
                                </Link>
                            </h3>
                            <p>Track & Schedule the visit of your Field Employee</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Mini CRM</a>
                                </Link>
                            </h3>
                            <p>Make entry of prospect manually OR excel upload and track the status of each one.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Notification</a>
                                </Link>
                            </h3>
                            <p>Notify your employee for overdue, Followups, new allocated prospect</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Dynamic Reports</a>
                                </Link>
                            </h3>
                            <p>Dynamic report of attendance, Prospect status, Call details, Hourly Report & more</p>
                        </div>
                    </div>


                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Communicate via Chat Option</a>
                                </Link>
                            </h3>
                            <p>Chat directly with employee whose going to visit</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Works Offline, as well</a>
                                </Link>
                            </h3>
                            <p>Internet issue ? No worries, our application works offline as well.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-ml-services-box">
                            <div className="image">
                                <img src="/images/services-image/service-image6.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Other Software Integrations</a>
                                </Link>
                            </h3>
                            <p>Easily integrate with your current Software/ CRM /ERP for required features</p>
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

export default OurServices;