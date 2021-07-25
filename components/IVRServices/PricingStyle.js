import React from 'react';
import Link from 'next/link'

const PricingStyleOne = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing Plans</h2>
                    <div className="bar"></div>
                    <p>Not sure about service subscription ? Please go thru <Link href="/privacy-policy"><a><strong>100% refundable policy.</strong></a></Link></p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h3>Startup</h3>
                                <h1>Rs. 12000</h1>
                                <h6>yearly</h6>
                            </div>
                            
                            <div className="price">
                            <h2>12000 Minutes</h2>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                <li className="active"> <strong className="text-primary">Unlimited Lines</strong></li>
                                    <li className="active"> <strong className="text-primary">5 Agents</strong></li>
                                    <li className="active"> <strong className="text-primary">IVR Solution</strong></li>
                                    <li className="active"> <strong className="text-primary">Online Panel</strong></li>
                                    <li className="active"> <strong className="text-primary">Call Recording</strong></li>
                                    <li className="active"> <strong className="text-primary">Voicemail</strong></li>
                                    <li className="active">Non-working hours</li>
                                    <li className="active">Customized Sender Id</li>
                                    <li className="active">Number Blacklist</li>
                                    <li className="active">Sticky Agent</li>
                                    <li className="active">Rs. 0.70 / Forwarding Min</li>
                                    <li className="active">Rs. 0.12 / Per SMS</li>
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
                                <h3>Unlimited</h3>
                                <h1>Rs. 18000</h1>
                                <h6>yearly</h6>
                            </div>
                            
                            <div className="price">
                                <h2>Unlimited Minutes</h2>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                <li className="active"> <strong className="text-primary">Unlimited Lines</strong></li>
                                    <li className="active"> <strong className="text-primary">5 Agents</strong></li>
                                    <li className="active"> <strong className="text-primary">IVR Solution</strong></li>
                                    <li className="active"> <strong className="text-primary">Online Panel</strong></li>
                                    <li className="active"> <strong className="text-primary">Call Recording</strong></li>
                                    <li className="active"> <strong className="text-primary">Voicemail</strong></li>
                                    <li className="active">Non-working hours</li>
                                    <li className="active">Customized Sender id</li>
                                    <li className="active">Number Blacklist</li>
                                    <li className="active">Sticky Agent</li>
                                    <li className="active">Rs. 15000 / Per Agent</li>
                                    <li className="active">Rs. 0.12 / Per SMS</li>
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
                                <h3>Enterprises</h3>
                                <h1>Rs. 120000</h1>
                                <h6>yearly</h6>
                            </div>
                            
                            <div className="price">
                            <h2>180000 Minutes</h2>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                <li className="active"> <strong className="text-primary">Unlimited Lines</strong></li>
                                    <li className="active"> <strong className="text-primary">5 Agents</strong></li>
                                    <li className="active"> <strong className="text-primary">IVR Solution</strong></li>
                                    <li className="active"> <strong className="text-primary">Online Panel</strong></li>
                                    <li className="active"> <strong className="text-primary">Call Recording</strong></li>
                                    <li className="active"> <strong className="text-primary">Voicemail</strong></li>
                                    <li className="active">Non-working hours</li>
                                    <li className="active">Customized Sender id</li>
                                    <li className="active">Number Blacklist</li>
                                    <li className="active">Sticky Agent</li>
                                    <li className="active">Rs. 0.65 / Minute</li>
                                    <li className="active">Rs. 0.12 / Per SMS</li>
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
                <h6 className="text-right"><strong>Note:</strong> All charges of our services are exclusive of taxes, payable annually and include 24*7 customer support.</h6>
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

export default PricingStyleOne;
