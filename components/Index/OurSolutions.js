import React from 'react';
import * as Icons from 'react-feather';
import Link from 'next/link';

const OurSolutions = () => {
    return (
        <div className="hosting-features-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Solutions</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon">
                                <Icons.Settings />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>IVR Service</a>
                                </Link>
                            </h3>
                            <p>Automated telephony system that interacts with callers, gathers information & routes calls to specific recipient.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon bg-c679e3">
                                <Icons.Info />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Missed Call Service</a>
                                </Link>
                            </h3>
                            <p>Services used for Customer engagement, verification, Lead generation, Conduct pool and collecting feedback</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon">
                                <Icons.Bell />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Tollfree Service</a>
                                </Link>
                            </h3>
                            <p>1800 Number which free for caller, domestic and international use which add credibility for business</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon bg-c679e3">
                                <Icons.Grid />
                            </div> 
                            <h3>
                                <Link href="/feature-details">
                                    <a>SMS Service</a>
                                </Link>
                            </h3> 
                            <p>SMS solution help to businesses with their marketing campaign, service alert/updates and OTP confirmation.</p>
                         </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon">
                                <Icons.Mail />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Voice Broadcast</a>
                                </Link>
                            </h3>
                            <p>Voice broadcasting helps in notification, confirmations, promotions, survey & discount with scalability.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon bg-c679e3">
                                <Icons.HardDrive />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>Audio Conference</a>
                                </Link>
                            </h3>
                            <p> Connect the caller / participant on cloud space via dial-in or dial-out method with special features.</p>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon bg-c679e3">
                                <Icons.Grid />
                            </div> 
                            <h3>
                                <Link href="/feature-details">
                                    <a>Call Center Dialer</a>
                                </Link>
                            </h3> 
                            <p>Receive incoming calls, place outgoing calls,  Call centre matrics with the performance  management.</p>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon">
                                <Icons.Mail />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>BeTyphon- Mobile CRM</a>
                                </Link>
                            </h3>
                            <p>Lead Management Software helps to track and manage the lead, customer, telesales, field executive and much more</p>
                         </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-hosting-features">
                            <div className="icon bg-c679e3">
                                <Icons.HardDrive />
                            </div>
                            <h3>
                                <Link href="/feature-details">
                                    <a>ETS-Employee Tracking Solution</a>
                                </Link>
                            </h3>
                            <p>Track calls in detail with Recording, Location and attendance of your every employee</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurSolutions;
