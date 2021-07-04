import React from 'react';
import Navbar from "@/components/_App/Navbar";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const About1 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="About Us" />

            <div className="about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-one.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                    <div className="bar"></div>
                                    <p>BSD Technologies Pvt Ltd is the leading cloud based service provider registered under Govt. of India IT company act. We provides cost effective and cutting edge IT solutions that are reliable, resilient and responsive. When you met with us, you get IT Partner rather than a seller. We  provide communication solutions like – IVR Services, Lead Management Software, SMS Solutions, Conference Solutions and much more.</p>
                                    <br />
                                    <p>Our clients unprecendented reliability and inteligence in business through our flagship product BeTyphon TM.</p>
                                    </div>

                                </div>
                        </div>
                    </div>

                    {/* <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our History</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Mission</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Who We Are</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>


            <Partner />

            <FunFactsArea />
            
            <Footer />
        </>
    )
}

export default About1;