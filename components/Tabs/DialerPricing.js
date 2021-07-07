import React from 'react';
import Link from 'next/link';

const DialerPricing = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    
                    <h3>Dialer helps to manage and increase business for Call Centre
-</h3>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <h5>-</h5>
                                <h3>HighLights</h3>
                                <h6>Subscribe as per Requirement</h6>
                            </div>
                        
                                <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> Hardware</li>
                                    <li><i data-feather="check"></i> Integration</li>
                                    <li><i data-feather="check"></i> CRM</li>
                                    <li><i data-feather="check"></i> Accessability</li>
                                    <li><i data-feather="check"></i> Calling Type</li>
                                    <li><i data-feather="check"></i> Setup Cost</li>
                                    <li><i data-feather="check"></i> Call Recording</li>
                                    <li><i data-feather="check"></i> Lead Capture</li>
                                    <li><i data-feather="check"></i> Lead distribution </li>
                                    <li><i data-feather="check"></i> Re-assignment </li>
                                    <li><i data-feather="check"></i> Custom work-flow</li>
                                    <li><i data-feather="check"></i> Report</li>
                                    <li><i data-feather="check"></i> Task & Reminder</li>
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
                                    <a className="btn btn-primary">More Details</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <h5>BeTyphon</h5>
                                <h3>Mobile Dialer</h3>
                                <h6>Rs.1000/Per User</h6>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                     <li><i data-feather="check"></i>Mobile Only</li>
                                    <li><i data-feather="check"></i> Whatsapp/SMS/Email</li>
                                    <li><i data-feather="check"></i> Mobile & Web</li>
                                    <li><i data-feather="check"></i> Online -(Cloud Infra)</li>
                                    <li><i data-feather="check"></i> Preview Calling</li>
                                    <li><i data-feather="check"></i> Pay per Go Model (As Usage)</li>
                                    <li><i data-feather="check"></i> On Cloud</li>
                                    <li><i data-feather="check"></i> Automatic (API/Email)</li>
                                    <li><i data-feather="check"></i> Auto Distribution</li>
                                    <li><i data-feather="check"></i> Available</li>
                                    <li><i data-feather="check"></i> Available</li>
                                    <li><i data-feather="check"></i> Real-time Report</li>
                                    <li><i data-feather="check"></i> Automatic</li>
                                    
                                   
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
                                    <a className="btn btn-primary">START DEMO</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <h5>Auto Dialer</h5>
                                <h3>Dialer-On Permises</h3>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i>Hardware Setup</li>
                                    <li><i data-feather="check"></i> Customization - on requirement</li>
                                    <li><i data-feather="check"></i> Web CRM</li>
                                    <li><i data-feather="check"></i> On Premises - (Intranet)</li>
                                    <li><i data-feather="check"></i> Predicitive & Preview Calling</li>
                                    <li><i data-feather="check"></i> Minimum - 15 Users Setup</li>
                                    <li><i data-feather="check"></i> On Premises</li>
                                    <li><i data-feather="check"></i> Customization - on requirement</li>
                                    <li><i data-feather="check"></i> Auto Distribution</li>
                                    <li><i data-feather="check"></i> Available</li>
                                    <li><i data-feather="check"></i> Available</li>
                                    <li><i data-feather="check"></i> Real-time Report</li>
                                    <li><i data-feather="check"></i> Automatic</li>
                                    <br />    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="signup">
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

export default DialerPricing;
