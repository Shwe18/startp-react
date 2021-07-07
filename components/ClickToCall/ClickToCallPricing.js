import React from 'react';
import Link from 'next/link'

const ClickToCallPricing = () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Price</h2>
                    <div className="bar"></div>
                    
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <h4>Startup</h4>
                                <h3>Rs. 10000/Year</h3>
                                
                            </div>
                            
                           
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"><strong>Click2call Link</strong></li>
                                    <li className="active"><strong>SMS Alert</strong></li>
                                    <li className="active">Call Recording</li>
                                    <li className="active">Online Reports</li>
                                    <li className="active">Customized Integration</li>
                                   
                                
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
                                <h4>Advance</h4>
                                <h3>Rs. 18000/Year</h3>
                               
                            </div>
                            
                           
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"><strong>Click2call link</strong></li>
                                    <li className="active"><strong>SMS Alert</strong></li>
                                    <li className="active"><strong>Call Recording</strong></li>
                                    <li className="active"><strong>Reports</strong></li>
                                    <li className="active">Customized Integration</li>
                                    
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
                                <h3>Rs. 36000/Year</h3>
                                
                            </div>
                            
                            
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"><strong>Click2call link</strong></li>
                                    <li className="active"><strong>SMS Alert</strong></li>
                                    <li className="active"><strong>Call Recording</strong></li>
                                    <li className="active"><strong>Reports</strong></li>
                                    <li className="active"><strong>Customized Integration</strong></li>
                                   
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

export default ClickToCallPricing;
