import React from 'react';

const OurFeatures = () => {
    return (
        <div className="why-choose-us ptb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-title">
                            <h2>Our Features</h2>
                            <div className="bar"></div>
                        </div>

                        <div className="why-choose-us-image">
                            <img 
                                src="/images/why-choose-us-image/man-stand.png"
                                className="animate__animated animate__fadeInLeft" 
                                alt="image"
                            />
                    
                            <img 
                                src="/images/why-choose-us-image/database.png"
                                className="animate__animated animate__fadeInRight" 
                                alt="image"
                            />
                
                            <img 
                                src="/images/services-left-image/cercle-shape.png"
                                className="rotateme" 
                                alt="image"
                            />
                
                            <img 
                                src="/images/why-choose-us-image/main-static.png"
                                className="main-pic animate__animated animate__fadeInUp" 
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-team"></i>
                                    </div>
                                    <h3><strong>Professional Image</strong></h3>
                                    <h6>Welcome message</h6>
                                    <h6>Language Preference</h6>
                                    <h6>Multi Level IVR</h6>
                                    <h6>Onhold Music</h6>
                                    <h6>Voicemail</h6>
                                    <h6>Sticky agent</h6>
                                    <br />
                                
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-rocket"></i>
                                    </div>
                                    <h3><strong>Super Advance Alert & Report</strong></h3>
                                   
                                        <h6>2 way SMS Notification</h6>
                                        <h6>Email alerts</h6>                                        
                                        <h6>Call Recording</h6>
                                        <h6>Call logs</h6>
                                        <h6>Real time analysis</h6>
                                        <h6>Number blacklisting</h6>
                                   
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-shield"></i>
                                    </div>
                                    <h3><strong>24/7 Customer Availability</strong></h3>
                                        <h6>Always Connected</h6>
                                        <h6>Intelligent Call Routing</h6>
                                        <h6>Multiple Call Connected at same time</h6>
                                        <h6>Office timing Setup</h6>
                                        <br />
                                    
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="single-why-choose-us">
                                    <div className="icon">
                                        <i className="flaticon-diamond"></i>
                                    </div>
                                    <h3><strong>Simple Online Panel</strong></h3>
                                    
                                        <h6>Easy Manageable</h6>
                                        <h6>Multi Agent login</h6>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurFeatures;
