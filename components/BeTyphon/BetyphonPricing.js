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
                                    <li className="active"> <strong className="text-primary"> 1 USER</strong></li>
                                    <li className="active"> <strong className="text-primary">Email Support Only</strong> </li>
                                    <li className="active"> <strong className="text-primary">Web & Mobile CRM</strong></li>
                                    <li className="active"> <strong className="text-primary">Auto Lead Distribution</strong></li>
                                    <li className="active"> <strong className="text-primary">Tasks & Reminders</strong> </li>
                                    <li className="active"> <strong className="text-primary">Customized Calling structure</strong> </li>
                                    <li className="active"> <strong className="text-primary">Real-time Reports </strong></li>
                                    <br />
                                    <br />
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
                                    <li className="active"> <strong className="text-primary">Everything in free, and </strong></li>
                                    <li className="active"> <strong className="text-primary">Chat & phone support </strong></li>
                                    <li className="active"> <strong className="text-primary">Auto Lead Capture </strong></li>
                                    <li className="active"> <strong className="text-primary">Dynamic Reports </strong></li>
                                    <li className="active"> <strong className="text-primary">Dynamic Reports </strong></li>
                                    <li className="active"> <strong className="text-primary">SMS & Email Communication </strong></li>
                                    <li className="active"> <strong className="text-primary">Push Notification </strong></li>
                                    <li className="active"> <strong className="text-primary">Call Details & Call Recording </strong></li>
                                    <li className="active"> <strong className="text-primary">Real-time Tracking </strong></li>
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
                                    <li className="active"> <strong className="text-primary">Everything in Free & Standard, and </strong></li>
                                    <li className="active"> <strong className="text-primary">On-site Support </strong></li>
                                    <li className="active"> <strong className="text-primary">Rule based triggers </strong></li>
                                    <li className="active"> <strong className="text-primary">Custom Workflow </strong></li>
                                    <li className="active"> <strong className="text-primary">Push Notification </strong></li>
                                    <li className="active"> <strong className="text-primary">API and Webhook Integration </strong></li>
                                    <li className="active"> <strong className="text-primary">Custom Lead Integrations </strong></li>
                                    <br />
                                    <br />
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
