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
 
const BestLeadManagementSoftwareInIndia = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Best Lead Management Software In India" />

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
                                <h3>Make your operations more transparent & increase your business…</h3>
                                <p>LMS is stands for Lead Management System. This technology helps you to manage your employee performance and analyse the ROI of leads sources with customised workflow.</p>
                                <p>Betyphon works as SAAS which allows you to access from anywhere on Computer, Tablet or Mobile. Betyphon mobile app allows the call recording, auto dialing, GPS tracking, Picture upload & much more</p>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h2>BeTyphon helps you to</h2>
                                <br />
                                <h4>Are you looking for a software which makes your operations more transparent and add value in your business?</h4>
                                <br />
                                <p><strong>Create Business Rules:</strong> Build your own business rule which supposed to be followed by each of concern person who are involved with business.</p>
                                <p><strong>Lead Distribution:</strong> Distribute your lead as per current requirement of business line. You can create auto rule engine as well.</p>
                                <p><strong>Customer Overview as per need:</strong> You can view the customer as you want to see (Count, Amount, Location, Status, Source etc.)</p>
                                <p><strong>Customer Management:</strong> Manage your customer as per business need.</p>
                                <p><strong>Enhance Team Performance:</strong> On basis of reports you can execute your team to make better performance.</p>
                                <p><strong>Scalable tool:</strong> Software is a tool which can be accessed by multiple counts with hierarchy which makes business more efficient and scalable.</p>
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

export default BestLeadManagementSoftwareInIndia;