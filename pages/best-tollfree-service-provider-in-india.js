import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const BestTollfreeServiceProviderInIndia = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Tollfree Service Provider In India" />

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
                                <h3>Tollfree number with IVR for your Business</h3>
                                <p>There’s no better way to connect with your callers 24X7 with your toll free number with IVR functionality. It also adds credibility to your business wherein caller not get charged to connect with you.</p>                      
                                <ul>
                                    <li><strong>Free for Callers</strong></li>
                                    <li><strong>Improve the quality of Leads</strong></li>
                                    <li><strong>Sounds more Professional</strong></li>
                                    <li><strong>Increasae your Business Enquiry</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h4>How to Tollfree Services Actually Works</h4>
                                <div className="bar py-2">
                                    <p>Anyone who calls on your Tollfree Number <strong>(1800 XXX XXXX)</strong> will first hear a Company welcome message <strong>(Welcome to XYZ Company Limited, We offers the special products and services)</strong> and post welcome message ivr extension option will come :</p>
                                    <ul>
                                        <li><strong>Press 1 for Sales Department</strong></li>
                                        <li><strong>Press 2 for HR Department</strong></li>
                                        <li><strong> Press 3 for Marketing Department</strong></li>
                                        <li><strong> Press 5 for Accounts Department</strong></li>
                                        <li><strong>Press 9 for customer care</strong></li>
                                    </ul>    
                                    <p>Based upon the extension option selected by caller, Incoming call will be automatically routed to any mobile or land-line phone mapped to that extension and agent start speaking with customer.</p>
                                    <p>And post call completed, System will automatically send sms on caller number with your customer sender ID,<strong> Example :  Pay TM, Tata Sky, ID-Idea, VM-ICICIB)</strong></p>
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

export default BestTollfreeServiceProviderInIndia;