import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import MainBanner from '@/components/PartnerWithUs/MainBanner'; 
import Partner from "@/components/Common/Partner";
 
const PartnerWithUs = () => {
    return (
        <>
            <Navbar />

            <MainBanner /> 
            <div className="Service-area ptb-80 pb-50">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-6 col-md-6">
                            <h2>Become a Solutionist</h2>
                            <br />
                            <h6>
                                <strong>Techmet Solutionist Program – Solutionist</strong> is looking forward to work as reseller across India and offer cutting-edge IT Solutions (Based on Cloud Telephony & Computing) & customer Services products to customer all over !
                            </h6>
                            <h6>You just pass on the customer details and create extra source of income.</h6>

                                <br />
                                <li>Fixed incentive on sales amount.</li>
                                <li>Beneficial even Non-Sales person as well</li>
                            <div className="ptb-80 pb-50">
                                <h3>Scale & reliability to handle large</h3>
                                <h3>call volumes</h3>
                            </div>
                            <div className="ptb-80 pb-50">
                                <h3>5000+ Satisfied customer in 65</h3>
                                <h3>Countries</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h2>Become a Channel Partner</h2>
                            <br />
                            <h6>
                                <strong>Techmet Partnership Program – Channel Partner</strong> is looking forward to work across India and offer cutting-edge IT Solutions (Based on Cloud Telephony & Computing) & Customer Services products to customer all over !
                            </h6>
                            <h6>
                            Loyalty marketing and Channel incentives to ensure a mutually beneficial partnership. Quick overview of our program’s reward options.
                            </h6>

                           
                                <li>Consistent Source of Income in future</li>
                                <li>Competitive advantage in the market</li>
                                <li>Add value to your existing and new customers</li>
                            <div className="ptb-80 pb-50">
                                <h3>Partner Panel</h3>
                            </div>
                            <div className="ptb-80">
                                <h3>Key Account Manager & Online</h3>
                                <h3>Online</h3>
                            </div>
                        </div>

                        <div className="faq-contact">
                        <h2>Join Hands Together</h2>
                        <form>
                        
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="Phone Number" placeholder="Phone Number" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="Email" placeholder="Your Email" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="Company Name" placeholder="Company Name" className="form-control" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="Your Revenue" placeholder="Your Revenue" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="Select Partner" placeholder="Select Partner" className="form-control" />
                                    </div>
                                </div>                               
                                
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" cols="30" rows="6" placeholder="Message" className="form-control"></textarea>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12">
                                    <button className="btn btn-primary" type="submit">Submit Now!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                        
                    </div>
                </div>
            </div>
           
            <Partner />
            
            <Footer />
        </>
    )
}

export default PartnerWithUs;