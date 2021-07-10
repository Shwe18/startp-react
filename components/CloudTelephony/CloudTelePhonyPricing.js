import React from 'react';
import Link from 'next/link';

const CloudTelephonyPricing = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
               

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <h5>Startup Plan-Missed Call</h5>
                                <h3>Rs. 6000</h3>
                                <h6>PerYear</h6>
                            </div>
                        
                                <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> 500 Calls / Daily</li>
                                    <li><i data-feather="check"></i> Missed Call Feature</li>
                                    <li><i data-feather="check"></i> SMS Alert</li>
                                    <li><i data-feather="check"></i> Number Blacklist</li>
                                    <li><i data-feather="check"></i> Online Panel</li>
                                    
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
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <h5>Startup Plan-IVR Service</h5>
                                <h3>Rs. 12000</h3>
                                <h6>PerYear</h6>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> 12000 Forwarding Minute</li>
                                    <li><i data-feather="check"></i> Welcome Message</li>
                                    <li><i data-feather="check"></i> IVR Solution</li>
                                    <li><i data-feather="check"></i> Call Recording</li>
                                    <li><i data-feather="check"></i> Online Panel</li>
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
                                <h5>Startup Plan-TollFree</h5>
                                <h3>Rs. 18000</h3>
                                <h6>PerYear</h6>
                                
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                    <li><i data-feather="check"></i> 12000 Incoming Minute</li>
                                    <li><i data-feather="check"></i> Welcome Message</li>
                                    <li><i data-feather="check"></i> IVR Solution</li>
                                    <li><i data-feather="check"></i> Call Recording</li>
                                    <li><i data-feather="check"></i> Call Rate : 1.5 Per minute</li>
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

export default CloudTelephonyPricing;
