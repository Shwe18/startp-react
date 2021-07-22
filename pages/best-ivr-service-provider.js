import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

 
const BestIVRServiceProvider = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Best IVR Service Provider" />

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
                                <h3>Best IVR Service Provider</h3>
                                <br />
                                <p>TechMet’s Smart IVRS is a hosted Interactive Voice Response System that is configured through a Virtual Number to automate business communication. 
                                    All business calls that are hit to the <strong>Virtual Number</strong>, segregates and routes callers to specific departments with the help of DTMF inputs as selected appropriately to optimize communication efficiency. 
                                    Multi-level IVR service with unlimited prompts, best to provide a personalized experience to the customers when they reach on the business number. 
                                    <strong>TechMet</strong> is the <strong>Best IVRS Service Provider</strong> in India who facilitates the customizations and enables the unique features of communication channels as per your business requirements.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default BestIVRServiceProvider;