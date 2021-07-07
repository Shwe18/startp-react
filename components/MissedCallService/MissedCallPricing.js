import React from 'react';
import Link from 'next/link'

const MissedCallPricing = () => {
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
                                <h1>Rs. 6000/ Per Year</h1>
                            </div>
                           
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Incoming calls(50 Calls/per Day)</li>
                                    <li className="active"> SMS Alert</li>
                                    <li className="active"> CRM Integration</li>
                                    <li className="active"> Number Blacklist</li>
                                    <li className="active"> Email Alert & Report</li>
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
                                <h1>Rs. 10000/ Per Year</h1>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active">Incoming calls(100 Calls/per Day)</li>
                                    <li className="active"> SMS Alert</li>
                                    <li className="active"> CRM Integration</li>
                                    <li className="active"> Number Blacklist</li>
                                    <li className="active"> Email Alert & Report</li>
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
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Business</h3>
                                <h1>Rs. 25000/ Per Year</h1>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Incoming calls-Unlimited</li>
                                    <li className="active"> SMS Alert</li>
                                    <li className="active"> CRM Integration</li>
                                    <li className="active"> Number Blacklist</li>
                                    <li className="active"> Email Alert & Report</li>
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

export default MissedCallPricing;
