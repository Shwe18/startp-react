import React from 'react';
import Link from 'next/link'

const VoiceSmsPricing = () => {
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
                                <h3>50 Paisa/Per 30 Sec @ Upto 10,000 Calls</h3>
                            </div>
                           
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Upload Audio Files</li>
                                    <li className="active"> Web Control Panel</li>
                                    <li className="active"> Detailed Report</li>
                                    <li className="active"> Pay per Usage</li>
                                    <li className="active"> Programmable Extension </li>
                                    <li className="active"> Customized Sender Id </li>
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
                                <h3>40 Paisa/Per 30 Sec @ Upto 1,00,000 Calls</h3>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Upload Audio Files</li>
                                    <li className="active"> Web Control Panel</li>
                                    <li className="active"> Detailed Report</li>
                                    <li className="active"> Pay per Usage</li>
                                    <li className="active"> Programmable Extension</li>
                                    <li className="active"> Customize Sender ID</li>
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
                                <h4>Enterprises</h4>
                                <h3>30 Paisa/Per 30 Sec @ Upto 10,00,000 Calls</h3>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active">Upload Audio Files</li>
                                    <li className="active">Web Control Panel</li>
                                    <li className="active">Detailed Report</li>
                                    <li className="active">Pay per Usage</li>
                                    <li className="active">Programmable Extension</li>
                                    <li className="active">Customize Sender ID</li>
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
    );s
    
}

export default VoiceSmsPricing;
