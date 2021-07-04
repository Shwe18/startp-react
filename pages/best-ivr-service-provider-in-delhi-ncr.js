import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
 
const BestIVRServiceProviderInDelhiNCR = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Best IVR Service Provider In Delhi NCR" />

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
                                <h3>Manage your business communications with IVR Services</h3>
                                <p>Techmet provides IVR Services – which is cost effective, reliable and backup auto-scaling mechanism. 
                                    Company is renowed as best IVR Service Provider in industry. 
                                    IVR is completely automation and incoming call centralisation on Single number for business communications. 
                                    IVR Services are used for different purposes in each industry which may be : Sales, Support, Balanck Check , Product Service schedule, Booking Order, Check Order status,  Applications downloand and much more..
                                </p>                        
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h4>How IVR Services are generally used in Industry:</h4>
                                <p>
                                    Anyone who calls on your Office Number (Virtual Number) will first hear a Company welcome message (Welcome to XYZ Company Limited, We offers the special products and services) and post welcome message ivr extension option will come :
                                </p>
                                <ul className ="px-5 m-5 display-7">
                                    <li><h5>Press 1 for Sales Department</h5></li>
                                    <li><h5>Press 2 for HR Department</h5></li>
                                    <li><h5>Press 3 for Marketing Department</h5></li>
                                    <li><h5>Press 5 for Accounts Department</h5></li>
                                    <li><h5>Press 9 for customer care</h5></li>
                                </ul>
                            </div>
                            
                        <p>Based upon the extension option selected by caller, Incoming call will be automatically routed to any mobile or land-line phone mapped to that extension and agent start speaking with customer.</p>
                        <p>And post call completed, System will automatically send sms on caller number with your customer sender ID, <strong>Example :  Pay TM, Tata Sky, ID-Idea, VM-ICICIB)</strong></p>
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

export default BestIVRServiceProviderInDelhiNCR;