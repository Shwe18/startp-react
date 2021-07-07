import React from 'react';
import Link from 'next/link';

const AudioConferencePricing= () => {
    return (
        <div className="pricing-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing </h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <i className="flaticon-data"></i>
                                <h4>Startup</h4>
                                <h3>Rs. 2500 with 5 Attendee</h3>
                                <h5> Monthly</h5>
                            </div>
                        
                                <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i><strong> Welcome Message</strong> </li>
                                    <li><i data-feather="check"></i> <strong>Allowed Only List</strong></li>
                                    <li><i data-feather="check"></i><strong> Attendance Reports</strong> </li>
                                    <li><i data-feather="check"></i><strong>Demand PIN </strong></li>
                                    <li><i data-feather="check"></i> <strong>Recording & Playback </strong> </li>
                                    <li><i data-feather="check"></i> Leader Hangup </li>
                                    <li><i data-feather="check"></i> Lecture Mode Conference </li>
                                    <li><i data-feather="check"></i> Operator Dial-Out </li>
                                    

                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table active-plan">
                            <div className="pricing-header">
                                <i className="flaticon-cloud"></i>
                                <h4>Advance</h4>
                                <h3>Rs. 6000 with 15 Attendee</h3>
                                <h5>Montly</h5>
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> <strong> Welcome Message</strong>  </li>
                                    <li><i data-feather="check"></i> <strong>Allowed Only List</strong></li>
                                    <li><i data-feather="check"></i><strong>Attendance Reports</strong></li>
                                    <li><i data-feather="check"></i> <strong> Demand PIN </strong></li>
                                    <li><i data-feather="check"></i> <strong> Recording & Playback</strong>  </li>
                                    <li><i data-feather="check"></i> <strong> Leader Hangup</strong>  </li>
                                    <li><i data-feather="check"></i> <strong> Lecture Mode Conference</strong>  </li>
                                    <li><i data-feather="check"></i> Operator Dial-Out </li>
                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
                                    <a className="btn btn-primary">SIGNUP TO BEGIN</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-table">
                            <div className="pricing-header">
                                <i className="flaticon-vps"></i>
                                <h4>Business</h4>
                                <h3>Rs. 10000 with 30 Attendee</h3>
                                <h5>Monthly</h5>
                                
                            </div>
                       
                            
                            <div className="pricing-features">
                                <ul>
                                <li><i data-feather="check"></i> <strong> Welcome Message</strong>  </li>
                                    <li><i data-feather="check"></i> <strong>Allowed Only List</strong></li>
                                    <li><i data-feather="check"></i><strong>Attendance Reports</strong></li>
                                    <li><i data-feather="check"></i> <strong> Demand PIN </strong></li>
                                    <li><i data-feather="check"></i> <strong> Recording & Playback</strong>  </li>
                                    <li><i data-feather="check"></i> <strong> Leader Hangup</strong>  </li>
                                    <li><i data-feather="check"></i> <strong> Lecture Mode Conference</strong>  </li>
                                    <li><i data-feather="check"></i> Operator Dial-Out </li>
                                    
                                </ul>
                            </div>
                            
                            <div className="pricing-footer">
                                <Link href="#">
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

export default AudioConferencePricing;
