import React from 'react';
import * as Icon from 'react-feather';

const ServicesArea = () => {
    return (
        <>
            <div className="services-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Benefits</h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Database /> Easy to connect
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Globe /> Privacy for Both Parties
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.File /> Distribute Same information to each caller
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.TrendingUp /> Professional View
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Folder /> No Hardware cost
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Monitor /> Never loss Web Enquiry
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Mail /> Pay-as-you-grow model
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Icon.Cloud /> Scale without adding manpower
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 services-right-image">
                            <img 
                                src="/images/services-right-image/book-self.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="book-self"
                            />
                           
                            <img 
                                src="/images/services-right-image/box.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="box"
                            />
                         
                            <img 
                                src="/images/services-right-image/chair.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                alt="chair"
                            /> 
                            
                            <img 
                                src="/images/services-right-image/cloud.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="cloud"
                            />
                   
                            <img 
                                src="/images/services-right-image/cup.png"
                                className="animate__animated animate__bounceIn animate__delay-0.2s" 
                                alt="cup"
                            />
               
                            <img 
                                src="/images/services-right-image/flower-top.png"
                                className="animate__animated animate__fadeInDown animate__delay-0.2s" 
                                alt="flower"
                            />
                     
                            <img 
                                src="/images/services-right-image/head-phone.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="head-phone"
                            />
                  
                            <img 
                                src="/images/services-right-image/monitor.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="monitor"
                            />
                
                            <img 
                                src="/images/services-right-image/mug.png"
                                className="animate__animated animate__rotateIn animate__delay-0.2s" 
                                alt="mug"
                            />
           
                            <img 
                                src="/images/services-right-image/table.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="table"
                            />
                    
                            <img 
                                src="/images/services-right-image/tissue.png"
                                className="animate__animated animate__zoomIn animate__delay-0.2s" 
                                alt="tissue"
                            />
                   
                            <img 
                                src="/images/services-right-image/water-bottle.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="water-bottle"
                            />
                
                            <img 
                                src="/images/services-right-image/wifi.png"
                                className="animate__animated animate__fadeInLeft animate__delay-0.2s" 
                                data-wow-delay="0.6s" 
                                alt="wifi"
                            />
                        
                            <img 
                                src="/images/services-right-image/cercle-shape.png"
                                className="bg-image rotateme" 
                                alt="shape"
                            />
                         
                            <img 
                                src="/images/services-right-image/service-right-main-pic.png"
                                className="animate__animated animate__fadeInUp animate__delay-0.2s" 
                                alt="main-pic"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <h6 className="text-center"><strong>Connect your Website Visitor thru Click2Call Service</strong></h6>
                        <br />
                        <br />
                        <p>An instant calling widget, strategically placed on your website to help you get in touch with leads while they’re looking you up. With Click-To-Call Solution. You can connect with leads, right away, to increase your conversion time. As soon a visitor submits his number we bridge a call between your agent and the visitor. Web-visitor will get call in India or International across the globe. These calls are free of cost to your potential customers. :</p>
                        <br />
                        <br />
                        <div className="text-center">
                            <p>Easily Installed   II   Optimize Productivity   II   Never miss a website visitor   II   Call is FREE of cost for them !</p>
                            <br />
                            <p>Integrate with Website, Application Or CRM  II   Customizable call process  II   Track & Record of each call</p>
                            <br />
                            <p>Instant Contact to suitable person  II   Call Impusiveness which work as Charm “Call Us Free”</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesArea;