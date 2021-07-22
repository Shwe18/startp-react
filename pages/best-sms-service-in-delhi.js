import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const BestSMSServiceInDelhi = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Best SMS Service In Delhi" />

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
                                <h3>Communicate about yourself in Single Click (SMS)</h3>
                                <p>SMS is useful for all types of businesses, especially in targeting the local customers. With the help of SMS you can communicate your existing customer or increase your sale by 200% in just a couple of days. SMS Marketing service is excellent for promoting as well as in communicating with the customers and conveying a brand message or to develop strong brand awareness among the mass.</p>    
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h2>Usage</h2>
                                <p><strong> Promotional Messages : Use for promotion acticity in India.</strong></p>
                                <p><strong> Transactional SMS : Use for communication from company to consumer in India.</strong></p>
                                <p><strong> International SMS : Communication via SMS globally.</strong></p>
                                <br />
                                <br />
                                <br />
                                <p>You can send simple broadcast</p>
                                <p>System will send the SMS to all the numbers that you have uploaded.</p>
                                <p>Promotions SMS is usually used for enquiry generation for product/services.</p>
                                <p>Transactional SMS used for update and communication to customer about product/services.</p>
                                <p>High capacity system is capable to sending millions of SMS simultaneously. <strong>(This is also depends on   server load and interconnect traffic load between various telephone exchange/operator)</strong></p>
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

export default BestSMSServiceInDelhi;