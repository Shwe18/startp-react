import React from 'react';
import Link from 'next/link'

const ETSPricing = () => {
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
                            <h4>Trial</h4>
                                <h1>Free</h1>
                                <h3>1 User Only</h3>
                            </div>
                           
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Team Management</li>
                                    <li className="active"> Call Recording</li>
                                    <li className="active"> Searching Bar</li>
                                    <li className="active"> Dynamic Reports</li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
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
                                <h4>Startup Plan</h4>
                                <h1>Rs. 5000</h1>
                                <h3>5 Users/Monthly</h3>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Team Management</li>
                                    <li className="active"> Call Recording</li>
                                    <li className="active"> Searching Bar</li>
                                    <li className="active"> Dynamic Reports</li>
                                    <li className="active"> Live Location Tracking</li>
                                    <li className="active"> Whatsapp Direct</li>
                                    <li className="active"> Visit Tracking</li>
                                    <li className="active"> Mini CRM</li>
                                    <li className="active"> Image Mapping</li>
                                    <li className="active"> SMS - Disposition</li>
                                    <li className="active"> Notification</li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
                                    <li className="active"> - </li>
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
                                <h4>Enterprsies</h4>
                                <h1>Rs. 40000</h1>
                                <h3>50 Users/Monthly</h3>
                            </div>
                            
                            <div className="pricing-features">
                                <ul>
                                    <li className="active"> Team Management</li>
                                    <li className="active"> Call Recording</li>
                                    <li className="active"> Searching Bar</li>
                                    <li className="active"> Dynamic Reports</li>
                                    <li className="active"> Live Location Tracking</li>
                                    <li className="active"> Whatsapp Direct</li>
                                    <li className="active"> Visit Tracking</li>
                                    <li className="active"> Mini CRM</li>
                                    <li className="active"> Image Mapping</li>      
                                    <li className="active"> SMS - Disposition</li>
                                    <li className="active"> Notification</li>
                                    <li className="active"> User Pin</li>
                                    <li className="active"> API Integration</li>
                                    <li className="active"> Chat</li>
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

export default ETSPricing;
