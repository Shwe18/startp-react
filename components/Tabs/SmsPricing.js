import React from 'react';
import Link from 'next/link';

const SmsPricing = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                <h5>Our SMS charges are based on delivery only, non-delivered message will get reveresed within 24 hours.. </h5>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <h5>Text SMS</h5>
                                <h3>Based on Usage</h3>
                                <h6>Transactional, Promotional, OTP</h6>
                            </div>
                        
                                <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> Advanced Dashboard</li>
                                    <li><i data-feather="check"></i> SMS Scheduling</li>
                                    <li><i data-feather="check"></i> Customised Messaging</li>
                                    <li><i data-feather="check"></i> Multiple Sender ID's</li>
                                    <li><i data-feather="check"></i> Real-time Delivery Report</li>
                                    <li><i data-feather="check"></i> SMS in Multiple Lenguages</li>
                                    <li><i data-feather="check"></i> API Integration</li>
                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">START DEMO</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <h5>Voice SMS (Broadcast)</h5>
                                <h3>Based On Usage</h3>
                                <h6>Transactional, Promotional, OTP</h6>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> Advanced Dashboard</li>
                                    <li><i data-feather="check"></i> SMS Scheduling</li>
                                    <li><i data-feather="check"></i> Customised Messaging</li>
                                    <li><i data-feather="check"></i> Text to Speech Or Voice file Upload</li>
                                    <li><i data-feather="check"></i> Real-time Delivery Report</li>
                                    <li><i data-feather="check"></i> SMS in Multiple Lenguages</li>
                                    <li><i data-feather="check"></i> API Integration</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">START DEMO</a>
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

export default SmsPricing;
