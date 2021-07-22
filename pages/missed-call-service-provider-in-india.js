import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const MissedCallServiceProviderInIndia = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Missed Call Service Provider In India" />

            <div className="features-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/feature1.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <p>Your customer can placed a missed call to your given number at zero cost and receive a call back immediately. Missed Call Service is easiest way to give your customer updates, Lead Generation, Free Callback to caller, Customer Engagement / Support / Feedback, Application Download, Opinion Poll, OTP/Mobile Number Verification.
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h4>How Missed Call Service Actually Works</h4>
                                <div className="bar py-2">
                                    <p>
                                    Your advertised number on diffenet medium sources (9810 XXX XXX) like Digital Media, Radio & TV, Publishing-Broucher, Pumplets, holdings etc. Or Product <strong>(Anyone who gives a missed call to a number, call will be get disconnect after a ring)</strong>
                                    </p>
                                    <p><strong>Each Missed Call is logged in System</strong></p>
                                    <p><strong>Interact with Customer as per Business Process</strong>
                                    </p>
                                    <p><strong>Automize your Feedback/Support Or Verification </strong></p>
                                    <p>And post call completed, System will automatically send sms on caller number with your customer sender ID,<strong> Example :  Pay TM, Tata Sky, ID-Idea, VM-ICICIB)</strong></p>
                                    <p>You can also set Auto Thank you SMS, give updates or interact with customer for which purpose you asked to give missed call</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/feature2.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default MissedCallServiceProviderInIndia;