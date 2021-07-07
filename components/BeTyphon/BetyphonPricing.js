import React from 'react';
import Link from 'next/link'

const BetyphonPricing = () => {
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
                            <h4>Startup</h4>
                               <h3>1 User</h3>
                                <h5> (Forever)</h5>
                            </div>
                           
                            <div className="pricing-features">
                                <ul>
                                    <li className="active">  1 uSER</li>
                                    <li className="active"> Email Support Only</li>
                                    <li className="active"> Web & Mobile CRM</li>
                                    <li className="active"> Auto Lead Distribution</li>
                                    <li className="active"> Tasks & Reminders </li>
                                    <li className="active"> Customized Calling structure </li>
                                    <li className="active"> Real-time Reports </li>
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
                            <h4>Advance</h4>
                                <h3>Rs. 1000/User/Month</h3>
                                <h5>Billed Yearly</h5>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Everything in free, and</li>
                                    <li className="active"> Chat & phone support</li>
                                    <li className="active"> Auto Lead Capture</li>
                                    <li className="active"> Dynamic Reports</li>
                                    <li className="active"> Dynamic Reports</li>
                                    <li className="active"> SMS & Email Communication</li>
                                    <li className="active"> Push Notification</li>
                                    <li className="active"> Call Details & Call Recording</li>
                                    <li className="active"> Real-time Tracking</li>
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
                            <h4>Business</h4>
                                <h3>Rs. 1500/ User/ Month</h3>
                                <h5>Billed Yearly</h5>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Everything in Free & Standard, and</li>
                                    <li className="active"> On-site Support</li>
                                    <li className="active"> Rule based triggers</li>
                                    <li className="active"> Custom Workflow</li>
                                    <li className="active"> Push Notification</li>
                                    <li className="active"> API and Webhook Integration</li>
                                    <li className="active"> Custom Lead Integrations</li>
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

export default BetyphonPricing;
