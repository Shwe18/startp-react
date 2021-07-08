import React from 'react';
import Link from 'next/link'

const TollfreePricing = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing Plans</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Startup</h3>
                                <h2>Rs. 18000/ Yearly</h2>
                                <h5>12000 Minutes</h5>
                            </div>
                           
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Welcome Message</li>
                                    <li className="active"> Programmable Extensions</li>
                                    <li className="active"> SMS Alert</li>
                                    <li className="active"> Voicemail</li>
                                    <li className="active"> Number Blacklist</li>
                                    <li className="active"> Multilevel IVR</li>
                                    <li className="active"> Sticky Agent</li>
                                    <li className="active"> Circle base Routing</li>
                                    <li className="active"> Customize Sender Id</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table active-plan">
                            <div className="pricing-header">
                                <h3>Advance</h3>
                                <h2>Rs. 6000/ Yearly</h2>
                                <h5>42000 Minutes</h5>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Welcome Message</li>
                                    <li className="active"> Programmable Extensions</li>
                                    <li className="active"> SMS Alert</li>
                                    <li className="active"> Voicemail</li>
                                    <li className="active"> Number Blacklist</li>
                                    <li className="active"> Multilevel IVR</li>
                                    <li className="active"> Sticky Agent</li>
                                    <li className="active"> Customize Sender Id</li>
                                    <li className="active"> Circle base Routing</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Business</h3>
                                <h2>Rs.1,20,000/ Yearly</h2>
                                <h5>90000 Minutes</h5>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Welcome Message</li>
                                    <li className="active"> Programmable Extensions</li>
                                    <li className="active"> SMS Alert</li>
                                    <li className="active"> Voicemail</li>
                                    <li className="active"> Number Blacklist</li>
                                    <li className="active"> Multilevel IVR</li>
                                    <li className="active"> Sticky Agent</li>
                                    <li className="active"> Circle base Routing</li>
                                    <li className="active"> Customize Sender Id</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
        </div>
    );
    
}

export default TollfreePricing;
